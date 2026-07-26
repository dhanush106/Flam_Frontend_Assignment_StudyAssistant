export async function retryInvalidJson(generateFn, messages) {

    let response = await generateFn(messages);

    try {
        JSON.parse(response);
        return response;
    }
    catch {
        console.log("Retrying AI AND Getting Correct OUTPUT...");

        const retryMessages = [
            ...messages,
            {
                role: "system",
                content:
                    "Your previous response has invalid JSON. Please Return ONLY corrected JSON."
            }
        ];
        return await generateFn(retryMessages);

    }

}