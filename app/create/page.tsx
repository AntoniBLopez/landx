'use client'

import { useState } from 'react'
import { PlaceholdersAndVanishInput } from '@/components/ui/input-vanisher'

export default function Chat() {

	const [generation, setGeneration] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [input, setInput] = useState('')

	const [time, setTime] = useState(true)


	const placeholders = [
		'Neon futuristic page with Cyberpunk vibes',
		'Solid color E-Commerce concept',
		'Natura type welcome page',
		'Make a page for a game presentation',
		'Make me a page that could impress any developer',
		'I want a page to show off my business',
		'Give me a page where i can show off my dj skills',
		'I want a luxury vibe kind of page',
		'Give me a random thing'
	]

	const onSubmit = async (event: { preventDefault: () => void }) => {
		console.log(event)
		event.preventDefault() // Previene el comportamiento predeterminado del formulario
		setIsLoading(true)

		await fetch('/api/chat', {
			method: 'POST',
			body: JSON.stringify({
				prompt: input,
			}),
		}).then(response => {
			response.json().then(json => {
				console.log(json)
				setGeneration(json.text)
				setIsLoading(false)
			})
		})
	}

	return (
		<main className="flex w-full h-screen flex-col items-center justify-center">
			<h1>Input your vision.</h1>

			<div className='p-10'>{isLoading ? 'Loading...' : generation}</div>

			<PlaceholdersAndVanishInput placeholders={placeholders} onChange={e => setInput(e.target.value)} onSubmit={(event)=>{
				if(time) {
					setTime(false)
					onSubmit(event)
					setTimeout(()=>{
						setTime(true)
					},3000)
				}
			}}></PlaceholdersAndVanishInput>
		</main>
	)

}