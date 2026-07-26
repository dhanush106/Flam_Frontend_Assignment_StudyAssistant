export async function retryInvalidJson(generateFn, messages) {
    let retries = 0;
    try {
        let response = await generateFn(messages);
        JSON.parse(response);
        return {
            response,
            retries
        };

    } catch (err) {
        console.log("⚠️ Invalid JSON received. Retrying...");
        retries++;
        const retryMessages = [
            ...messages,
            {
                role: "system",
                content:
                    "Your previous response contained invalid JSON. Return ONLY valid JSON. Do not include markdown, explanations, or code fences. Your response must begin with '{' and end with '}'."
            }
        ];
        const response = await generateFn(retryMessages);
        JSON.parse(response);
        return {
            response,
            retries
        };
    }
}