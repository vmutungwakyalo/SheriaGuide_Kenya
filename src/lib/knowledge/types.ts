export type KnowledgeSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  sourceType: "legislation" | "government" | "court" | "regulator";
  checkedAt: string;
  publishedAt?: string;
};

export type KnowledgeFact = {
  text: string;
  sourceIds: string[];
};

export type KnowledgeSection = {
  heading: string;
  facts: KnowledgeFact[];
};

export type KnowledgeEntry = {
  id: string;
  domainSlug: string;
  title: string;
  summary: string;
  keywords: string[];
  queryExamples?: string[];
  sections: KnowledgeSection[];
  notVerified: string[];
  sources: KnowledgeSource[];
  version: number;
  changeHistory: Array<{ version: number; changedAt: string; summary: string }>;
  review: {
    sourceStatus: "checked" | "needs_update";
    checkedAt: string;
    nextReviewAt: string;
    legalReviewStatus: "pending" | "approved";
    reviewer?: string;
    legalReviewedAt?: string;
  };
};
