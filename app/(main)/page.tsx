'use client'

import { WobbleCard } from '@/components/ui/wobble-card'
import { useChat } from 'ai/react'

export default function Chat() {

	const { messages, input, handleInputChange, handleSubmit } = useChat()

	return (
		<main className="flex w-full flex-col items-center justify-center">
			<div className='text-center mt-36 pb-10'>
				<h2 className='text-2xl'>Welcome to</h2>
				<h1 className='text-7xl'>LANDX</h1>
			</div>
		</main>
	)

}

