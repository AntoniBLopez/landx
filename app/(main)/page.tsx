'use client'

import { BgLogo } from '@/components/ui/bg-logo'
import { WobbleCard } from '@/components/ui/wobble-card'
import { useChat } from 'ai/react'
import { ArrowDown } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'

export default function Chat() {

	const { messages, input, handleInputChange, handleSubmit } = useChat()
	
	useEffect(() => {
		AOS.init({
		  duration: 1000, // duración de la animación en milisegundos
		});
	},[]);

	return (
		<main className="flex w-full flex-col items-center justify-center">
			<div className='text-center mx-auto mt-36 pb-10'>
				<h2 className='text-2xl font-semibold'>Welcome to</h2>
				<h1 className='text-7xl'>LANDX</h1>
				<br></br>
				<div className='flex mx-auto text-center w-max'>
					<h3 className='text-2xl font-bold my-auto'>Ever wanted to create a</h3>
					<h3 className='text-3xl font-bold px-1.5 my-auto'>PRO</h3>
					<h3 className='text-2xl font-bold my-auto'>land page..</h3>
				</div>
				<h2 className='mb-28 text-base text-black dark:text-white bg-black/10 dark:bg-black/20 w-max mx-auto rounded-md px-4 mt-2 gradient-border'>
					<span className='gradient-text z-2 text-black'>but never knew how or where to start?</span>
				</h2>	
				<a href='/create'>
					<Button variant={'outline'} className='mb-28 text-lg p-5'>
						Get started!
					</Button>
				</a>
				<div className="bounce">
					<ArrowDown />
				</div>
				<h2 className='mx-auto text-center w-max text-xl mt-3'>We provide you with the unique AI Tool for you to create amazing Landing page concepts!</h2>
				<img src='/example.png' className='rounded-xl mx-auto mt-5 w-[100%]' data-aos="fade-up"></img>
			</div>
			<BackgroundBeams className='z-[-2]'></BackgroundBeams>
		</main>
	)

}

