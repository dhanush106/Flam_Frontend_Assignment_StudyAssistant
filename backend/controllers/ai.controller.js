import {
  buildTopicPrompt,
  buildNotesPrompt,
} from "../services/promptBuilder.js";

import { generateAIResponse } from "../services/ai.service.js";
import { retryInvalidJson } from "../services/jsonRetry.js";
import { saveAIInteraction } from "../services/logging.service.js";


export const generateContent = async (req, res) => {
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
    const response = await retryInvalidJson(
        generateAIResponse,
        messages
    );

    console.log("\n========== RAW AI RESPONSE ==========\n");
    console.log(response);
    console.log("\n=====================================\n");

    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);
    
    //TO LOG THE DATA 
    await saveAIInteraction({
      provider: process.env.AI_PROVIDER,
      model: process.env.OPENROUTER_MODEL,
      mode,
      request: req.body,
      prompt,
      rawResponse: response,
      parsedResponse: parsed,
      status: "success"
    });

    return res.json({
      success: true,
      content: parsed,
    });
  } catch (err) {
    console.error(err);
    //TO LOG THE ERRORS
    await saveAIInteraction({
        provider: process.env.AI_PROVIDER,
        model: process.env.OPENROUTER_MODEL,
        mode: req.body.mode,
        request: req.body,
        error: err.message,
        stack: err.stack,
        status: "failed"
    });

    return res.status(500).json({
      success: false,
      message: err.message || "Server Error",
    });
  }
};