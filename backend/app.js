import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import { generateResponse } from "./services/ollamaService.js";
import { buildTopicPrompt } from "./services/promptBuilder.js";

const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.post("/test/generate", async (req, res) => {
    try {

        const data = req.body;

        if (data.mode !== "topic") {
            return res.status(400).json({
                success: false,
                message: "Invalid mode."
            });
        }

        const prompt = buildTopicPrompt(data);

        const reply = await generateResponse(prompt);

        console.log("========== RAW AI RESPONSE ==========");
        console.log(reply);
        console.log("=====================================");

        let parsedResponse;

        try {
            parsedResponse = JSON.parse(reply);
        } catch (err) {

            return res.status(500).json({
                success: false,
                message: "AI returned invalid JSON.",
                raw: reply
            });

        }

        return res.status(200).json({
            success: true,
            content: parsedResponse
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
});

app.listen(PORT, () => {
    console.log("Server Running...",PORT);
});