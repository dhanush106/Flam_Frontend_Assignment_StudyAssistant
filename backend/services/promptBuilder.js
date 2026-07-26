export function buildTopicPrompt(data) {

    return `
You are an expert professor in ${data.topic}.

Current Level:
${data.level}

Expected Depth:
${data.depth}

Requirements:

${data.roadmap ? "- Generate a roadmap." : ""}

${data.quiz ? "- Generate a quiz." : ""}

Return ONLY valid JSON.

DO NOT write explanations.

DO NOT write markdown.

DO NOT use \`\`\`json.

DO NOT write anything before or after the JSON.

Return exactly this structure:

{
    "title":"",
    "summary":"",
    "roadmap":[
        {
            "title":"",
            "description":""
        }
    ],
    "quiz":[
        {
            "question":"",
            "options":[
                "",
                "",
                "",
                ""
            ],
            "correctAnswer":0,
            "explanation":""
        }
    ]
}
`;
}