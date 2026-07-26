export function buildTopicPrompt(data) {
  return `
You are an expert professor and curriculum designer.

Generate a structured learning roadmap for the following topic.

Student Information:
- Topic: ${data.topic}
- Current Level: ${data.level}
- Expected Depth: ${data.depth}

Requirements:
${data.roadmap ? "- Generate a detailed learning roadmap." : ""}
${data.flashcards ? "- Generate flashcards for revision." : ""}

Guidelines:

- The roadmap must progress from beginner concepts to advanced concepts.
- Each roadmap module should naturally build upon the previous one.
- Keep explanations concise, clear, and beginner-friendly.
- Focus on concepts that are important for interviews and practical understanding.
- Each flashcard should test exactly one important concept.
- Flashcards should cover concepts from the roadmap.
- Generate realistic study durations.
- Use ONLY the allowed difficulty values:
  - Easy
  - Medium
  - Hard

IMPORTANT:
-You are a JSON generator.

You MUST respond with ONLY a valid JSON object.

Do NOT include:
- markdown
- explanations
- notes
- comments
- code fences
- greetings
- extra text

Your entire response must begin with '{' and end with '}'.
- Return ONLY valid JSON.
- Do NOT include markdown.
- Do NOT wrap the response inside \`\`\`.
- Do NOT write explanations before or after the JSON.
- All IDs must be unique.
- estimatedMinutes and estimatedCompletionMinutes must be numbers.
- keyConcepts should contain 2–5 important concepts.
- Generate between 5 and 8 roadmap modules.
- Generate between 8 and 12 flashcards.

Return JSON in EXACTLY this format:

{
  "type": "topic",
  "metadata": {
    "title": "",
    "level": "",
    "depth": "",
    "estimatedCompletionMinutes": 0,
    "moduleCount": 0
  },
  "summary": "",
  "roadmap": [
    {
      "id": "rm-1",
      "order": 1,
      "title": "",
      "description": "",
      "difficulty": "Easy",
      "estimatedMinutes": 0,
      "keyConcepts": [
        "",
        ""
      ]
    }
  ],
  "flashcards": [
    {
      "id": "fc-1",
      "topic": "",
      "question": "",
      "answer": ""
    }
  ]
}
`;
}

export function buildNotesPrompt(data) {
  return `
You are an expert teacher.

The student has provided study notes.

Your job is to analyze the notes and generate concise revision material.

Student Notes:

${data.notes}

Requirements:

- Summarize the notes clearly.
- Extract the most important concepts.
- Generate flashcards.
- Keep answers concise.
- Flashcards should help in revision.
- Do not invent concepts not present in the notes.

IMPORTANT:

- Return ONLY valid JSON.
- No markdown.
- No code fences.
- No explanations.
- IDs must be unique.
- Generate 8-12 flashcards.

Return EXACTLY this JSON:

{
  "type":"notes",
  "metadata":{
    "estimatedReadingMinutes":0
  },
  "summary":"",
  "keyConcepts":[
    ""
  ],
  "flashcards":[
    {
      "id":"fc-1",
      "topic":"",
      "question":"",
      "answer":""
    }
  ]
}
`;
}