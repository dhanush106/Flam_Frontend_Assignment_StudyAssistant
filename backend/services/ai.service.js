import { generateOllamaResponse } from "./ollamaService.js";
import { generateOpenRouterResponse } from "./openRouterService.js";

export async function generateAIResponse(messages) {
  const provider = process.env.AI_PROVIDER || "ollama";

  try {
    if (provider === "openrouter") {
      return await generateOpenRouterResponse(messages);
    }
    return await generateOllamaResponse(messages);
  } catch (err) {
    return await generateOllamaResponse(messages);
  }
}
