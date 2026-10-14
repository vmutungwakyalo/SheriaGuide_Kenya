import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { DOMAINS } from "@/lib/domains";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("offers all 16 proposal domains with example questions", () => {
    expect(DOMAINS).toHaveLength(16);
    expect(new Set(DOMAINS.map((domain) => domain.slug)).size).toBe(16);
    expect(DOMAINS.every((domain) => domain.questions.length > 0)).toBe(true);
    expect(DOMAINS.map((domain) => domain.name)).toEqual([
      "Land & Property",
      "Vehicles & Transport",
      "Marriage & Family",
      "Children & Education",
      "Employment",
      "Business & Trade",
      "Housing & Rentals",
      "Crime, Law & Justice",
      "Identity & Civil Registration",
      "Money, Banking & Consumer Rights",
      "Health & Social Services",
      "Immigration & Travel",
      "Wills, Inheritance & Succession",
      "Agriculture & Rural",
      "Intellectual Property & Creative Works",
      "Digital Life & ICT",
    ]);
  });

  it("matches a chat URL carrying a topic example question", () => {
    const question = DOMAINS[0]!.questions[0]!;
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const location = router.buildLocation({
      to: "/chat",
      search: { q: question, domainSlug: DOMAINS[0]!.slug },
    });

    const matches = router.matchRoutes(location.pathname);

    expect(matches.at(-1)?.routeId).toBe("/chat");
    expect(location.search).toEqual({ q: question, domainSlug: DOMAINS[0]!.slug });
  });
});
