import ollama from "ollama";

export async function generateOllamaResponse(messages) {

    const response = await ollama.chat({
        model: "qwen3.5:2b",
        messages,
        format: "json",
        options: {
            temperature: 0.2
        }
    });

    return response.message.content;
}