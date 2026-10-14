import { createUIMessageStream, createUIMessageStreamResponse, type UIMessage } from "ai";
import { DOMAINS } from "@/lib/domains";
import { KNOWLEDGE_ENTRIES } from "@/lib/knowledge/entries";
import {
  findKnowledgeEntry,
  renderKnowledgeEntry,
  renderUnsupportedAnswer,
  validateKnowledgeEntries,
} from "@/lib/knowledge/retrieval";

const knowledgeEntryIssues = validateKnowledgeEntries(KNOWLEDGE_ENTRIES);
if (knowledgeEntryIssues.length) {
  throw new Error(`Invalid legal knowledge base:\n${knowledgeEntryIssues.join("\n")}`);
}

export async function handleChat(request: Request) {
  let body: { messages?: UIMessage[]; domainSlug?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const messages = Array.isArray(body.messages) ? body.messages.slice(-30) : [];
  if (!messages.length) return Response.json({ error: "No messages" }, { status: 400 });
  if (body.domainSlug && !DOMAINS.some((domain) => domain.slug === body.domainSlug)) {
    return Response.json({ error: "Unknown legal topic." }, { status: 400 });
  }

  const lastUserMessage = [...messages].reverse().find((message) => message.role === "user");
  const query = lastUserMessage?.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ")
    .trim();
  if (!query) return Response.json({ error: "No question was provided." }, { status: 400 });

  const entry = findKnowledgeEntry(query, KNOWLEDGE_ENTRIES, body.domainSlug);
  const answer = entry ? renderKnowledgeEntry(entry) : renderUnsupportedAnswer();
  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      writer.write({ type: "text-start", id: "grounded-answer" });
      writer.write({ type: "text-delta", id: "grounded-answer", delta: answer });
      writer.write({ type: "text-end", id: "grounded-answer" });
    },
  });
  return createUIMessageStreamResponse({ stream, headers: { "Cache-Control": "no-store" } });
}
