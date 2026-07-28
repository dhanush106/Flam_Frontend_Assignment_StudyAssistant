import {
  buildTopicPrompt,
  buildNotesPrompt,
} from "../services/promptBuilder.js";

import { generateAIResponse } from "../services/ai.service.js";
import { retryInvalidJson } from "../services/jsonRetry.js";
import { saveAIInteraction } from "../services/logging.service.js";

export const generateContent = async (req, res) => {
  const startTime = Date.now();

  try {
    const data = req.body;

    let prompt = "";

    switch (data.mode) {
      case "topic":
        prompt = buildTopicPrompt(data);
        break;

      case "notes":
        prompt = buildNotesPrompt(data);
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid mode.",
        });
    }

    const messages = [
      {
        role: "system",
        content: `
You are an AI Study Assistant.

Return ONLY valid JSON.

Do NOT use markdown.

Do NOT wrap JSON inside \`\`\`.

Do NOT explain anything.

Your response MUST begin with { and end with }.
        `.trim(),
      },
      {
        role: "user",
        content: prompt,
      },
    ];

    const {
      response,
      retries,
    } = await retryInvalidJson(
      generateAIResponse,
      messages
    );

    const responseTimeMs = Date.now() - startTime;

    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    try {
      await saveAIInteraction({
        status: "success",
        execution: {
          provider: process.env.AI_PROVIDER,
          model: process.env.OPENROUTER_MODEL,
          responseTimeMs,
          retryCount: retries,
        },
        request: req.body,
        prompt,
        response: {
          raw: response,
          parsed,
        },
      });
    } catch {}

    return res.json({
      success: true,
      content: parsed,
    });

  } catch (err) {
    const responseTimeMs = Date.now() - startTime;

    try {
      await saveAIInteraction({
        status: "failed",
        execution: {
          provider: process.env.AI_PROVIDER,
          model: process.env.OPENROUTER_MODEL,
          responseTimeMs,
        },
        request: req.body,
        error: {
          message: err.message,
          stack: err.stack,
        },
      });
    } catch {}

    return res.status(500).json({
      success: false,
      message: err.message || "Server Error",
    });
  }
};
