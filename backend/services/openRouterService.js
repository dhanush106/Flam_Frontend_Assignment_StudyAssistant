import dotenv from 'dotenv';
dotenv.config();
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-OpenRouter-Title": "AI Study Assistant"
  }
});

export async function generateOpenRouterResponse(messages) {
  const completion = await client.chat.completions.create({
    model: process.env.OPENROUTER_MODEL,
    messages,
    temperature: 0.2,

    response_format: {
      type: "json_object"
    }
  });

  return completion.choices[0].message.content;
}