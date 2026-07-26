import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const LOG_DIR = path.join(process.cwd(), "logs");

async function ensureLogDirectory() {
    await fs.mkdir(LOG_DIR, { recursive: true });
}

function getLogFileName() {
    const today = new Date().toISOString().split("T")[0];
    return path.join(LOG_DIR, `${today}.json`);
}

export async function saveAIInteraction(data) {

    await ensureLogDirectory();

    const file = getLogFileName();

    let logs = [];

    try {

        const content = await fs.readFile(file, "utf-8");

        logs = JSON.parse(content);

    } catch {

        logs = [];

    }

    logs.push({

        id: crypto.randomUUID(),

        timestamp: new Date().toISOString(),

        ...data

    });

    await fs.writeFile(

        file,

        JSON.stringify(logs, null, 2)

    );

}