import { describe, expect, it } from "vitest";
import { DOMAINS } from "@/lib/domains";
import { KNOWLEDGE_ENTRIES } from "@/lib/knowledge/entries";
import {
  findKnowledgeEntry,
  getKnowledgeCoverage,
  MIN_PROCESSES_PER_DOMAIN,
  renderKnowledgeEntry,
  renderUnsupportedAnswer,
  validateKnowledgeEntries,
} from "@/lib/knowledge/retrieval";
import type { KnowledgeEntry } from "@/lib/knowledge/types";

const entry: KnowledgeEntry = {
  id: "land-title-search",
  domainSlug: "land",
  title: "Checking a land title",
  summary: "A starter guide to title verification.",
  keywords: ["title", "search", "ownership"],
  notVerified: [],
  sections: [
    {
      heading: "Official process",
      facts: [
        {
          text: "Request an official search from the relevant land registry.",
          sourceIds: ["land-act"],
        },
      ],
    },
  ],
  version: 1,
  changeHistory: [
    { version: 1, changedAt: "2026-10-14", summary: "Initial source-checked draft." },
  ],
  sources: [
    {
      id: "land-act",
      title: "Land Registration Act",
      publisher: "Kenya Law",
      url: "https://kenyalaw.org/",
      sourceType: "legislation",
      checkedAt: "2026-10-14",
    },
  ],
  review: {
    sourceStatus: "checked",
    checkedAt: "2026-10-14",
    nextReviewAt: "2027-04-14",
    legalReviewStatus: "pending",
  },
};

describe("Source-backed knowledge", () => {
  it("retrieves a matching entry by its domain or process keywords", () => {
    expect(findKnowledgeEntry("What is the title search process?", [entry])?.id).toBe(entry.id);
    expect(findKnowledgeEntry(entry.title, [entry], "land")?.id).toBe(entry.id);
    expect(findKnowledgeEntry("How do I verify a title?", [entry], "land")?.id).toBe(entry.id);
    expect(findKnowledgeEntry("unrelated question", [entry], "land")).toBeUndefined();
    expect(findKnowledgeEntry("unrelated question", [entry])).toBeUndefined();
  });

  it("matches an exact guide example and declines ambiguous topic matches", () => {
    const withExamples = { ...entry, queryExamples: ["How do I check my land title?"] };
    expect(findKnowledgeEntry("How do I check my land title?", [withExamples], "land")?.id).toBe(
      entry.id,
    );
    expect(
      findKnowledgeEntry("What is the title search process?", [entry, withExamples], "land"),
    ).toBe(undefined);
  });

  it("attaches source links to facts and discloses review status", () => {
    const answer = renderKnowledgeEntry(entry);

    expect(answer).toContain("[Land Registration Act](https://kenyalaw.org/)");
    expect(answer).toContain("Content version:** 1");
    expect(answer).toContain("not yet been independently reviewed");
    expect(answer).toContain("not legal advice");
  });

  it("rejects facts without valid citations", () => {
    const uncited = {
      ...entry,
      sections: [{ heading: "Unsupported", facts: [{ text: "Uncited claim.", sourceIds: [] }] }],
    };
    const badReference = {
      ...entry,
      sections: [{ heading: "Bad reference", facts: [{ text: "Claim.", sourceIds: ["missing"] }] }],
    };

    expect(() => renderKnowledgeEntry(uncited)).toThrow(/uncited fact/);
    expect(() => renderKnowledgeEntry(badReference)).toThrow(/missing source/);
    expect(validateKnowledgeEntries([uncited])).toContain(
      'Entry "land-title-search" contains an uncited fact.',
    );
    expect(validateKnowledgeEntries([badReference])).toContain(
      'Entry "land-title-search" references missing source "missing".',
    );
  });

  it("does not invent guidance for unsupported questions", () => {
    expect(renderUnsupportedAnswer()).toContain("I don't yet have a source-checked process guide");
    expect(renderUnsupportedAnswer()).toContain("I won't guess");
  });

  it("keeps the published knowledge base structurally source-checked", () => {
    expect(validateKnowledgeEntries(KNOWLEDGE_ENTRIES)).toEqual([]);
  });

  it("routes each published example question to its own guide", () => {
    for (const guide of KNOWLEDGE_ENTRIES) {
      for (const example of guide.queryExamples ?? []) {
        expect(findKnowledgeEntry(example, KNOWLEDGE_ENTRIES, guide.domainSlug)?.id).toBe(guide.id);
      }
    }
  });

  it("has at least one source-backed entry for every proposal domain", () => {
    expect(new Set(KNOWLEDGE_ENTRIES.map((knowledgeEntry) => knowledgeEntry.domainSlug))).toEqual(
      new Set(DOMAINS.map((domain) => domain.slug)),
    );
  });

  it("reports the 20-per-domain catalogue target without inflating current coverage", () => {
    const coverage = getKnowledgeCoverage(KNOWLEDGE_ENTRIES);

    expect(coverage.targetPerDomain).toBe(20);
    expect(coverage.targetProcesses).toBe(DOMAINS.length * MIN_PROCESSES_PER_DOMAIN);
    expect(coverage.totalProcesses).toBe(KNOWLEDGE_ENTRIES.length);
    expect(coverage.totalProcesses).toBe(320);
    expect(coverage.domainsMeetingTarget).toBe(DOMAINS.length);
  });
});
