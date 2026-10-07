import { GoogleGenerativeAI } from "@google/generative-ai";
import { profile } from "@/data/chatbot/profile";
import { projects } from "@/data/chatbot/projects";
import { skills } from "@/data/chatbot/skills";
import { experience } from "@/data/chatbot/experience";

const systemPrompt = `
${profile}

--- Knowledge Base ---
${projects}

${skills}

${experience}
`;

// Ordered list of models to try — newest first, fallback to older stable ones
const MODEL_FALLBACK_LIST = [
  "gemini-3.8-flash",
  "gemini-3.5-flash-lite",
  "gemini-2.0-flash-001",
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing Gemini API Key. Please add it to .env.local" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Format messages for Gemini API
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    if (history.length > 0 && history[0].role === "model") {
      history = history.slice(1);
    }

    const lastMessage = messages[messages.length - 1].content;
    const genAI = new GoogleGenerativeAI(apiKey);

    let lastError: Error | null = null;

    for (const modelName of MODEL_FALLBACK_LIST) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt,
        });

        const chat = model.startChat({ history });
        const result = await chat.sendMessageStream(lastMessage);

        const stream = new ReadableStream({
          async start(controller) {
            for await (const chunk of result.stream) {
              const chunkText = chunk.text();
              if (chunkText) {
                controller.enqueue(new TextEncoder().encode(chunkText));
              }
            }
            controller.close();
          }
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "X-Model-Used": modelName,
          },
        });
      } catch (modelErr: any) {
        // If 404 (model not found) or 503 (overloaded), try next model
        const msg: string = modelErr?.message ?? "";
        if (msg.includes("404") || msg.includes("503") || msg.includes("not found")) {
          lastError = modelErr;
          continue;
        }
        // Any other error — throw immediately
        throw modelErr;
      }
    }

    // All models failed
    throw lastError ?? new Error("All Gemini models failed to respond.");

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
