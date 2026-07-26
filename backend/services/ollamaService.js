import ollama from "ollama";

export async function generateResponse(prompt) {

    try {

        const response = await ollama.chat({

            model: "qwen3.5:2b",

            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert study assistant. Always return valid JSON only."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],

            options: {
                temperature: 0.2
            }

        });

        return response.message.content;

    } catch (err) {

        console.error(err);

        throw err;

    }
}