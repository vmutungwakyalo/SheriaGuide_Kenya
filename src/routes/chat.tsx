import { createFileRoute, Link } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { Scale } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { DOMAINS } from "@/lib/domains";

export const Route = createFileRoute("/chat")({
  validateSearch: (s: Record<string, unknown>): { q?: string; domainSlug?: string } => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
    domainSlug: typeof s["domainSlug"] === "string" ? s["domainSlug"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Ask SheriaGuide — Kenyan legal assistant" },
      { name: "description", content: "Chat with SheriaGuide about Kenyan law and compliance in English or Kiswahili." },
      { property: "og:title", content: "Ask SheriaGuide — Kenyan legal assistant" },
      { property: "og:description", content: "Get plain-language answers about Kenyan law." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const { q, domainSlug } = Route.useSearch();
  const [text, setText] = useState("");
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        ...(domainSlug ? { body: { domainSlug } } : {}),
      }),
    [domainSlug],
  );
  const { messages, sendMessage, status, stop } = useChat({
    transport,
    onError: (e) => {
      const m = e.message || "";
      toast.error(
        m.includes("429") ? "Too many requests — please wait a moment."
          : m.includes("401") || m.includes("403") ? "Check your Gemini API key in .env."
          : "Something went wrong. Please try again.",
      );
    },
  });
  const busy = status === "submitted" || status === "streaming";
  const lastSentQ = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (!q) {
      lastSentQ.current = undefined;
      return;
    }
    if (q === lastSentQ.current) return;

    const timeoutId = window.setTimeout(() => {
      lastSentQ.current = q;
      void sendMessage({ text: q });
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [q, sendMessage]);

  const ask = (t: string) => {
    if (!t.trim() || busy) return;
    sendMessage({ text: t.trim() });
    setText("");
  };

  const last = messages[messages.length - 1];
  const waiting = status === "submitted" || (busy && last?.role === "user");

  return (
    <div className="flex h-screen flex-col bg-background">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col overflow-hidden px-4">
        <Conversation className="flex-1">
          <ConversationContent>
            {messages.length === 0 ? (
              <ConversationEmptyState
                title="Habari! What would you like to know?"
                description="Ask about business, land, work, family, copyright — in English or Kiswahili."
              >
                <div className="mt-6 flex flex-col items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><Scale className="h-5 w-5" /></span>
                  <p className="font-display text-2xl text-foreground">Habari! What would you like to know?</p>
                  <p className="text-sm text-muted-foreground">Ask about business, land, work, family, copyright — in English or Kiswahili.</p>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {[0, 3, 14, 5].map((i) => DOMAINS[i]!).map((d) => (
                      <button key={d.slug} onClick={() => ask(d.questions[0]!)} className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground hover:border-primary">
                        {d.questions[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </ConversationEmptyState>
            ) : (
              messages.map((m) => (
                <Message from={m.role} key={m.id}>
                  <MessageContent className={m.role === "user" ? "bg-primary text-primary-foreground" : "bg-transparent p-0"}>
                    {m.parts.map((p, i) =>
                      p.type === "text" ? (
                        m.role === "assistant" ? <MessageResponse key={i}>{p.text}</MessageResponse> : <span key={i}>{p.text}</span>
                      ) : null,
                    )}
                  </MessageContent>
                </Message>
              ))
            )}
            {waiting && <Shimmer>Looking into Kenyan law…</Shimmer>}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        <div className="pb-4 pt-2">
          <PromptInput onSubmit={(msg) => ask(msg.text ?? "")}>
            <PromptInputTextarea value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. How do I register a trademark?" />
            <PromptInputFooter className="justify-end">
              <PromptInputSubmit status={status} onStop={stop} disabled={!busy && !text.trim()} />
            </PromptInputFooter>
          </PromptInput>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            General information, not legal advice. <Link to="/topics" className="underline">Browse topics</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
