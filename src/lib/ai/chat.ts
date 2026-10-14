import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type ModelMessage } from "ai";

export function createChatCompletionCall(
  request: Request,
  config: { baseURL: string; apiKey: string; model: string },
  messages: ModelMessage[],
  instructions?: string,
) {
  const provider = createOpenAI({
    baseURL: config.baseURL,
    apiKey: config.apiKey,
  });
  const result = streamText({
    model: provider.chat(config.model),
    ...(instructions ? { system: instructions } : {}),
    messages,
    abortSignal: request.signal,
  });
  return {
    result,
    response: () => result.toUIMessageStreamResponse(),
  };
}
