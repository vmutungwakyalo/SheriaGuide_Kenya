import { DOMAINS } from "@/lib/domains";
import type { KnowledgeEntry } from "./types";

export const MIN_PROCESSES_PER_DOMAIN = 20;

const STOP_WORDS = new Set([
  "about",
  "and",
  "are",
  "can",
  "do",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "kenya",
  "my",
  "of",
  "the",
  "to",
  "what",
  "where",
  "which",
  "with",
  "ya",
  "za",
]);

function words(value: string): Set<string> {
  return new Set(
    value
      .toLocaleLowerCase()
      .normalize("NFKD")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2 && !STOP_WORDS.has(word)),
  );
}

export function findKnowledgeEntry(
  query: string,
  entries: KnowledgeEntry[],
  domainSlug?: string,
): KnowledgeEntry | undefined {
  const candidates = domainSlug
    ? entries.filter((entry) => entry.domainSlug === domainSlug)
    : entries;
  if (!candidates.length) return undefined;

  const queryWords = words(query);
  if (domainSlug) {
    const ranked = candidates
      .map((entry) => ({
        entry,
        score:
          normalizePhrase(entry.title) === normalizePhrase(query) ||
          entry.queryExamples?.some(
            (example) => normalizePhrase(example) === normalizePhrase(query),
          )
            ? Number.MAX_SAFE_INTEGER
            : [...words(`${entry.title} ${entry.summary} ${entry.keywords.join(" ")}`)].filter(
                (word) => queryWords.has(word),
              ).length,
      }))
      .sort((left, right) => right.score - left.score);
    if (!ranked[0] || ranked[0].score === 0) return undefined;
    if (ranked[0].score === ranked[1]?.score) return undefined;
    return ranked[0].entry;
  }

  const ranked = candidates
    .map((entry) => {
      const domain = DOMAINS.find((item) => item.slug === entry.domainSlug);
      const titleWords = words(`${entry.title} ${domain?.name ?? ""}`);
      const searchableWords = words(`${entry.summary} ${entry.keywords.join(" ")}`);
      let score = 0;
      for (const word of queryWords) {
        if (titleWords.has(word)) score += 3;
        else if (searchableWords.has(word)) score += 1;
      }
      return { entry, score };
    })
    .sort((left, right) => right.score - left.score);

  return ranked[0] && ranked[0].score >= 2 ? ranked[0].entry : undefined;
}

function normalizePhrase(value: string): string {
  return value
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getKnowledgeCoverage(entries: KnowledgeEntry[]) {
  const domainCounts = Object.fromEntries(
    DOMAINS.map((domain) => [
      domain.slug,
      entries.filter((entry) => entry.domainSlug === domain.slug).length,
    ]),
  );
  const totalProcesses = Object.values(domainCounts).reduce((total, count) => total + count, 0);
  const domainsMeetingTarget = Object.values(domainCounts).filter(
    (count) => count >= MIN_PROCESSES_PER_DOMAIN,
  ).length;

  return {
    totalProcesses,
    targetProcesses: DOMAINS.length * MIN_PROCESSES_PER_DOMAIN,
    targetPerDomain: MIN_PROCESSES_PER_DOMAIN,
    domainsMeetingTarget,
    totalDomains: DOMAINS.length,
    domainCounts,
  };
}

export function renderKnowledgeEntry(entry: KnowledgeEntry, now = new Date()): string {
  const sourceById = new Map(entry.sources.map((source) => [source.id, source]));
  const sections = entry.sections.map((section) => {
    const facts = section.facts.map((fact) => {
      const citations = fact.sourceIds.map((sourceId) => {
        const source = sourceById.get(sourceId);
        if (!source) {
          throw new Error(`Knowledge entry "${entry.id}" references missing source "${sourceId}".`);
        }
        return `[${source.title}](${source.url})`;
      });
      if (!citations.length) {
        throw new Error(`Knowledge entry "${entry.id}" contains an uncited fact.`);
      }
      return `- ${fact.text} ${citations.join("; ")}`;
    });
    return `### ${section.heading}\n\n${facts.join("\n")}`;
  });
  const notVerified = entry.notVerified.length
    ? `### Details not yet verified\n\n${entry.notVerified.map((item) => `- ${item}`).join("\n")}`
    : undefined;

  const nextReviewAt = new Date(entry.review.nextReviewAt);
  const outdated =
    entry.review.sourceStatus !== "checked" ||
    Number.isNaN(nextReviewAt.getTime()) ||
    now.getTime() > nextReviewAt.getTime();
  const reviewNotice =
    entry.review.legalReviewStatus === "approved"
      ? "Source-checked guidance."
      : "Source-checked starter guidance; it has not yet been independently reviewed by a Kenyan legal professional.";
  const freshnessNotice = outdated
    ? " Some source details may have changed; confirm current requirements with the responsible agency."
    : "";

  return [
    `## ${entry.title}`,
    entry.summary,
    ...sections,
    ...(notVerified ? [notVerified] : []),
    `**Content version:** ${entry.version} · **Sources checked:** ${entry.review.checkedAt}`,
    `**Review status:** ${reviewNotice}${freshnessNotice}`,
    "**General information only; this is not legal advice. Confirm time-sensitive requirements with the responsible agency or a qualified Kenyan advocate.**",
  ].join("\n\n");
}

export function renderUnsupportedAnswer(): string {
  return "I don't yet have a source-checked process guide for that question in my knowledge base. I won't guess at legal requirements, fees, or timelines. Please check the relevant Kenyan government agency or Kenya Law, or consult a qualified advocate. This is general information, not legal advice.";
}

export function validateKnowledgeEntries(entries: KnowledgeEntry[]): string[] {
  const issues: string[] = [];
  const ids = new Set<string>();
  const domainSlugs = new Set(DOMAINS.map((domain) => domain.slug));

  for (const entry of entries) {
    if (ids.has(entry.id)) issues.push(`Duplicate knowledge entry ID "${entry.id}".`);
    ids.add(entry.id);
    if (!domainSlugs.has(entry.domainSlug)) {
      issues.push(`Entry "${entry.id}" uses unknown domain "${entry.domainSlug}".`);
    }
    if (!Number.isInteger(entry.version) || entry.version < 1) {
      issues.push(`Entry "${entry.id}" has an invalid content version.`);
    }
    if (
      entry.changeHistory.length === 0 ||
      !entry.changeHistory.some((change) => change.version === entry.version)
    ) {
      issues.push(`Entry "${entry.id}" has no change-history record for its current version.`);
    }
    if (!entry.sources.length) issues.push(`Entry "${entry.id}" has no sources.`);

    const sourceIds = new Set<string>();
    for (const source of entry.sources) {
      if (sourceIds.has(source.id)) {
        issues.push(`Entry "${entry.id}" has duplicate source ID "${source.id}".`);
      }
      sourceIds.add(source.id);
      if (!/^https:\/\//.test(source.url)) {
        issues.push(`Source "${source.id}" must use HTTPS.`);
      }
      if (Number.isNaN(new Date(source.checkedAt).getTime())) {
        issues.push(`Source "${source.id}" has an invalid checked date.`);
      }
    }

    for (const section of entry.sections) {
      for (const fact of section.facts) {
        if (!fact.sourceIds.length) {
          issues.push(`Entry "${entry.id}" contains an uncited fact.`);
        }
        for (const sourceId of fact.sourceIds) {
          if (!sourceIds.has(sourceId)) {
            issues.push(`Entry "${entry.id}" references missing source "${sourceId}".`);
          }
        }
      }
    }

    if (entry.review.sourceStatus !== "checked") {
      issues.push(`Entry "${entry.id}" is not marked source-checked.`);
    }
    if (Number.isNaN(new Date(entry.review.nextReviewAt).getTime())) {
      issues.push(`Entry "${entry.id}" has an invalid next-review date.`);
    }
  }
  return issues;
}
