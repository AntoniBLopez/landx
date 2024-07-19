import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { Api } from "@/types";

interface ReqType {
	prompt: string;
	api: Api;
}

export async function POST(req: Request) {
	const { prompt, api }: ReqType = await req.json();

	console.log(api.apiProvider);

	// MODELO OPEN IA
	if (api.apiProvider === "OpenAI") {
		const openaiProvider = createOpenAI({
			apiKey: api.apiKey,
		});

		const { text } = await generateText({
			model: openaiProvider("gpt-4-turbo"),
			prompt: prompt,
		});

		return Response.json({ text });
	}
	// MODELO LLAMA 3 CUSTOM
	if (api.apiProvider === "Llama3") {
		console.log("Llama3 PROVIDER");
		const groq = createOpenAI({
			baseURL: "https://api.groq.com/openai/v1",
			apiKey: api.apiKey,
		});
		const { text } = await generateText({
			model: groq("llama3-8b-8192"),
			system: "You are a helpful assistant.",
			prompt,
		});

		return Response.json({ text });
	}

	// MODELO GRATUITO
	console.log("FREE PROVIDER");
	const groq = createOpenAI({
		baseURL: "https://api.groq.com/openai/v1",
		apiKey: process.env.GROQ_API_KEY,
	});
	const { text } = await generateText({
		model: groq("llama3-8b-8192"),
		system: "You are a helpful assistant.",
		prompt,
	});

	return Response.json({ text });
}
