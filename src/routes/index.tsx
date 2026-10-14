import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Languages, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { DOMAINS } from "@/lib/domains";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SheriaGuide Kenya — Plain-language legal guidance" },
      { name: "description", content: "Ask questions about Kenyan law, business compliance, land, employment, copyright and more. Clear answers in English or Kiswahili." },
      { property: "og:title", content: "SheriaGuide Kenya — Plain-language legal guidance" },
      { property: "og:description", content: "AI-powered guidance on Kenyan law and compliance, in English or Kiswahili." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pt-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-foreground">Sheria kwa kila mtu · Law for everyone</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
          Understand Kenyan law <em className="text-primary">before</em> it costs you.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Registering a business, renting a house, writing a book, losing a job — ask SheriaGuide and get clear steps, the laws behind them, and where to go next.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/chat" search={{}} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
            Ask your question <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/topics" className="inline-flex items-center rounded-md border border-border px-6 py-3 font-medium text-foreground hover:bg-secondary">
            Browse 16 topics
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          {[
            { icon: BookOpen, t: "Grounded in Kenyan law", d: "Answers point to the Constitution, Acts and agencies like KRA, BRS, KECOBO and Ardhisasa." },
            { icon: Languages, t: "English or Kiswahili", d: "Ask in the language you are most comfortable with." },
            { icon: ShieldCheck, t: "Knows its limits", d: "General information, not legal advice — it tells you when to see an advocate or free legal aid." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <Icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-display text-xl text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl text-foreground">Popular questions</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {DOMAINS.slice(0, 6).map((d) => (
            <Link key={d.slug} to="/chat" search={{ q: d.questions[0]!, domainSlug: d.slug }} className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:border-primary">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{d.name}</p>
                <p className="mt-1 text-foreground">{d.questions[0]}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        SheriaGuide Kenya provides general legal information, not legal advice.
      </footer>
    </div>
  );
}
