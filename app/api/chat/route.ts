import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Modelo gratuito
const groq = createOpenAI({
	baseURL: 'https://api.groq.com/openai/v1',
	apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
	const { messages } = await req.json()

	// const result = await generateText({
	const result = await streamText({
		// model: openai("gpt-4-turbo"),
		model: groq('llama3-8b-8192'),
		system: 'Create a landing page, make sure its unique and non-repetitive, follow the user vision and requirements, and respond purely with code, no additive text, no explanations, only the code.',
		messages,
	})

	// console.log(result.text);
	// return Response.json(result.text);

  // console.log(result.text);
  // return Response.json(result.text);

  return result.toAIStreamResponse()
}
