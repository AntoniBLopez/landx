'use client'

import { useChat } from 'ai/react'
import { PlaceholdersAndVanishInput } from '@/components/ui/input-vanisher'
import { useState } from 'react'

export default function Chat() {

	const { messages, input, handleInputChange, handleSubmit } = useChat()

    const [time, setTime] = useState(true)

    let placeholders = [
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

	return (
		<main className="flex w-full h-screen flex-col items-center justify-center">
			<h1>Input your vision.</h1> 
            <div className='p-10'>
            {messages.map((m) => (
                <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === 'user' ? 'User: ' : 'AI: '}
                    {m.content}
                </div>
            ))}
            </div>
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleInputChange} onSubmit={()=>{
                if(time) {
                    setTime(false)
                    handleSubmit()
                    setTimeout(()=>{
                        setTime(true)
                    },3000)
                }
            }}></PlaceholdersAndVanishInput>
		</main>
	)

}