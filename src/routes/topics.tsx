import { createFileRoute, Link } from "@tanstack/react-router";
import { KNOWLEDGE_ENTRIES } from "@/lib/knowledge/entries";
import { SiteHeader } from "@/components/SiteHeader";
import { DOMAINS } from "@/lib/domains";
import { getKnowledgeCoverage, MIN_PROCESSES_PER_DOMAIN } from "@/lib/knowledge/retrieval";

const knowledgeCoverage = getKnowledgeCoverage(KNOWLEDGE_ENTRIES);

export const Route = createFileRoute("/topics")({
  head: () => ({
    meta: [
      { title: "Legal topics — SheriaGuide Kenya" },
      {
        name: "description",
        content:
          "Browse 16 areas of Kenyan law: business, tax, land, employment, family, intellectual property and more.",
      },
      { property: "og:title", content: "Legal topics — SheriaGuide Kenya" },
      {
        property: "og:description",
        content: "16 areas of Kenyan law explained in plain language.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Topics,
});

function Topics() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl text-foreground md:text-5xl">
          16 areas of Kenyan law
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Browse source-linked process guides or choose an example question to ask about a topic.
        </p>
        <section
          aria-label="Process catalogue progress"
          className="mt-6 rounded-lg border border-border bg-card p-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl text-card-foreground">Process catalogue</h2>
            <p className="text-sm text-muted-foreground">
              {knowledgeCoverage.totalProcesses} of {knowledgeCoverage.targetProcesses} guides ·
              target: {knowledgeCoverage.targetPerDomain} per topic
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Every guide is source-linked and states what remains unverified. The catalogue aims to capture real procedure and requirements, not legal conclusions.
          </p>
        </section>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d, i) => (
            <article
              key={d.slug}
              className="flex flex-col rounded-lg border border-border bg-card p-5"
            >
              <span className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 font-display text-xl text-card-foreground">{d.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{d.blurb}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {knowledgeCoverage.domainCounts[d.slug] ?? 0} / {MIN_PROCESSES_PER_DOMAIN} target
                guides
              </p>
              {KNOWLEDGE_ENTRIES.filter((entry) => entry.domainSlug === d.slug).length > 0 && (
                <div className="mt-4 border-t border-border pt-3">
                  <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Common process guides
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {KNOWLEDGE_ENTRIES.filter((entry) => entry.domainSlug === d.slug).slice(0, 5).map(
                      (entry) => {
                        const question = entry.queryExamples?.[0] ?? entry.title;
                        return (
                          <li key={entry.id}>
                            <Link
                              to="/chat"
                              search={{ q: question, domainSlug: d.slug }}
                              className="text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"
                            >
                              {entry.title}
                            </Link>
                          </li>
                        );
                      },
                    )}
                  </ul>
                  {KNOWLEDGE_ENTRIES.filter((entry) => entry.domainSlug === d.slug).length > 5 && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {KNOWLEDGE_ENTRIES.filter((entry) => entry.domainSlug === d.slug).length - 5}+ more guides in this topic
                    </p>
                  )}
                </div>
              )}
              <ul className="mt-4 space-y-2">
                {d.questions.map((q) => (
                  <li key={q}>
                    <Link
                      to="/chat"
                      search={{ q, domainSlug: d.slug }}
                      className="text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"
                    >
                      {q}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
