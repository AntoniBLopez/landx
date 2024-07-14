import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

// Modelo gratuito
const groq = createOpenAI({
	baseURL: "https://api.groq.com/openai/v1",
	apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
	const { prompt }: { prompt: string } = await req.json();

	const { text } = await generateText({
		// model: openai('gpt-4'), para usar -> import { openai } from '@ai-sdk/openai'
		model: groq("llama3-8b-8192"),
		system: "You are a helpful assistant.",
		prompt,
	});

	return Response.json({ text });
}
