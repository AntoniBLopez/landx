'use client'

import { useState } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { PlaceholdersAndVanishInput } from '@/components/ui/input-vanisher'

export default function Chat() {

	const [generation, setGeneration] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [input, setInput] = useState('')

	const [time, setTime] = useState(true)

    const placeholders = [
        'Create a neon futuristic page with Cyberpunk vibes',
        'Design a solid color E-Commerce concept',
        'Build a natura-themed welcome page',
        'Make a page for a game presentation',
        'Create a page that would impress any developer',
        'Design a page to showcase my business',
        'Build a page to show off my DJ skills',
        'Create a luxury vibe page',
        'Give me a random page concept',
        'Design a landing page with stars in the background',
        'Create a space-themed background page',
        'Make a minimalist portfolio showcase',
        'Design a vintage travel blog',
        'Create an animated tech startup intro page',
        'Build a bold and bright fashion statement page',
        'Design an underwater adventure theme',
        'Create a gothic literature hub',
        'Build an eco-friendly product launch page',
        'Design an AI and robotics exhibition page',
        'Make a retro arcade game portal',
        'Create an elegant wedding invitation page',
        'Build a fitness and health journey page',
        'Design a fantasy book launch page',
        'Create an urban street art gallery',
        'Make a high-energy sports event page',
        'Design an interactive educational course page',
        'Build a music festival hype page',
        'Create a serene meditation retreat page',
        'Design a virtual reality experience page',
        'Make a modern art exhibition page',
        'Build a luxury real estate showcase',
        'Create a culinary delight recipe blog',
        'Design a tech gadget review hub',
        'Build a children\'s storybook land page',
        'Make a mountain adventure travel guide page',
        'Create a pet adoption center page',
        'Design a futuristic tech conference page',
        'Build a tropical beach resort page',
        'Create a steampunk-themed landing page',
        'Design a comic book fan page',
        'Make a vibrant music artist showcase',
        'Build a space mission launch page',
        'Create a medieval fair event page',
        'Design a cozy coffee shop landing page',
        'Build a vintage car exhibition page',
        'Create a science fiction movie premiere page',
        'Design a colorful festival celebration page',
        'Make a high-tech fitness tracker launch page',
        'Build a serene nature photography portfolio',
        'Create a superhero fan club page',
        'Design a contemporary dance academy page',
        'Create a rustic farm-to-table restaurant page',
        'Design a sleek modern architecture firm site',
        'Build a whimsical children\'s toy store page',
        'Create a chic urban fashion boutique site',
        'Design a dynamic sports training facility page',
        'Build a high-energy dance party promotion page',
        'Create a serene yoga retreat landing page',
        'Design a high-tech innovation lab site',
        'Build a vibrant street food festival page',
        'Create a cozy mountain cabin rental page',
        'Design a futuristic AI assistant showcase',
        'Make a retro vinyl record store page',
        'Build a minimalist wellness spa page',
        'Create a vibrant street market guide',
        'Design a cutting-edge graphic design portfolio',
        'Build a colorful online children\'s book library',
        'Create a sleek automotive showcase',
        'Design a rustic country wedding page',
        'Build an interactive virtual museum tour',
        'Create a vibrant cultural festival page',
        'Design a futuristic cityscape landing page',
        'Build a cozy home decor inspiration site',
        'Create a high-energy music video release page',
        'Design a modern coworking space landing page',
        'Build a serene botanical garden guide',
        'Create a chic minimalist fashion lookbook',
        'Design a dynamic fitness challenge page',
        'Build an elegant wine tasting event site',
        'Create a whimsical fairytale wedding page',
        'Design a futuristic drone technology showcase',
        'Build a vibrant community art project page',
        'Create a rustic farmhouse bed and breakfast site',
        'Design a sleek tech product launch page',
        'Build an interactive cooking class landing page',
        'Create a serene beach yoga retreat site',
        'Design a vibrant festival fashion guide',
        'Build a dynamic tech conference agenda page',
        'Create a cozy pet cafe landing page',
        'Design a futuristic smart home showcase',
        'Build a rustic outdoor adventure guide',
        'Create a vibrant food truck festival page',
        'Design a high-tech VR gaming portal',
        'Build a sleek luxury car rental page',
        'Create a cozy winter cabin rental site',
        'Design a dynamic martial arts dojo page',
        'Build an interactive educational museum exhibit'
    ];    

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
            <BackgroundBeams />
		</main>
	)

}