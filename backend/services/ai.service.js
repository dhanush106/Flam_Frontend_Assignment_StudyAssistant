import { generateOllamaResponse } from "./ollamaService.js";
import { generateOpenRouterResponse } from "./openRouterService.js";

export async function generateAIResponse(messages) {
  const provider = process.env.AI_PROVIDER || "ollama";

  const start = Date.now();
  const response = await generateOpenRouterResponse(messages);
  console.log(`AI-Response Time : ${Date.now() - start} ms`);
  try {
        if (provider === "openrouter") {
            console.log("Using OpenRouter...");
            return await generateOpenRouterResponse(messages);
        }
        console.log("Using Ollama...");
        return await generateOllamaResponse(messages);
    }
    catch(err){
        console.log("Primary Provider Failed");
        console.log(err.message);
        console.log("Switching to Ollama...");
        return await generateOllamaResponse(messages);
    }
}

