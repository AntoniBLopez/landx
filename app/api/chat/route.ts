import { openai, createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Modelo gratuito
const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
	const { messages } = await req.json()

  const result = await streamText({
    /* Usar groq, dejamos la API KEY de openai para usarla cuando despleguemos el proyecto */
    // model: openai("gpt-4-turbo"),
    model: groq('llama3-8b-8192'),
    messages,
  });

	return result.toAIStreamResponse()
}