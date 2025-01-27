"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Footer } from "@/components/ui/footer/Footer";
import { getSession } from "../api/session/getSession";

export default function Chat() {
	
	const [isLogged, setLogged] = useState(false)

	useEffect(() => {
		AOS.init({
			duration: 1000, // duración de la animación en milisegundos
		});
	}, []);

	useEffect(()=>{
		async function c() {
			let result = await getSession(localStorage.getItem('session')!!)
			setLogged(result.session)
		}
		c()
	}, [])

	return (
		<main className="flex w-full flex-col items-center justify-center px-4 sm:px-8">
			<div className="text-center mx-auto mt-20 sm:mt-36 pb-10">
				<h2 className="text-xl sm:text-2xl font-semibold mt-5">Welcome to</h2>
				<h1 className="text-center text-5xl sm:text-7xl outlinedLabel text-transparent mb-2 shadow-white">LANDX</h1>
				<div className="flex flex-wrap justify-center sm:flex-row mx-auto text-center w-full sm:w-max">
					<h3 className="text-lg sm:text-2xl font-bold my-auto">
						Ever wanted to create a
					</h3>
					<h3 className="text-2xl sm:text-3xl font-bold px-1.5 my-auto">PRO</h3>
					<h3 className="text-lg sm:text-2xl font-bold my-auto">
						landing page...
					</h3>
				</div>
				<h2 className="mb-12 sm:mb-28 bg-black/10 dark:bg-black/20 w-max mx-auto rounded-md px-4 mt-2 gradient-border">
					<div className="gradient-text opacity-10" />
					<span className="text-white font-bold">
						but never knew how or where to start?
					</span>
				</h2>
				<div className="flex flex-col w-max -mt-3 mx-auto justify-center mb-12 sm:mb-28">
					{
						isLogged ? (
							<Link
								href="/create"
								className="
									m-2
									text-md
									sm:text-lg
									font-medium
									dark:font-normal
									py-2
									px-6
									rounded-lg
									transition-all
									duration-400
									bg-gradient-to-r
									from-black/5 to-transparent
									hover:from-white/10
									hover:to-purple-200
									dark:hover:from-black/10
									dark:hover:to-purple-950
									hover:border-purple-200
									dark:hover:border-purple-700
									dark:border-white
									border-black text-black hover:text-white hover:font-bold border-[2px] dark:text-white"
							>
								{/* hover:dark:bg-white/30 hover:bg-black/20 */}
								Start creating!
							</Link>
						) : (
							<Link
								href="/login"
								className="
									m-2
									text-md
									sm:text-lg
									font-medium
									dark:font-normal
									py-2
									px-6
									rounded-lg
									transition-all
									duration-400
									bg-gradient-to-r
									from-black/5 to-transparent
									hover:from-white/10
									hover:to-purple-200
									dark:hover:from-black/10
									dark:hover:to-purple-950
									hover:border-purple-200
									dark:hover:border-purple-700
									dark:border-white
									border-black text-black hover:text-white hover:font-bold border-[2px] dark:text-white"
							>
								{/* hover:dark:bg-white/30 hover:bg-black/20 */}
								Start creating!
							</Link>
						)
					}
					<Link
						href="/dashboard"
						className="
							m-2
							text-md
							sm:text-lg
							font-medium
							dark:font-normal
							py-2
							px-6
							rounded-lg
							transition-all
							duration-400
							bg-gradient-to-r
							from-black/5 to-transparent
							hover:from-white/10
							hover:to-purple-200
							dark:hover:from-black/10
							dark:hover:to-purple-950
							hover:border-purple-200
							dark:hover:border-purple-700
							dark:border-white
							border-black text-black hover:text-white hover:font-bold border-[2px] dark:text-white"
					>
						{/* hover:dark:bg-white/30 hover:bg-black/20 */}
						Explore LandX ART!
					</Link>
				</div>
				<div className="bounce flex justify-center">
					<ArrowDown />
				</div>
				<div className="px-4">
					<h2 className="mx-auto text-center text-lg sm:text-xl mt-3">
						We provide you with the unique AI Tool for you to create amazing
						Landing page concepts!
					</h2>
					<div className="flex justify-center mt-5">
						<Image
							src="/landx.png"
							className="rounded-xl"
							data-aos="fade-up"
							alt="Template"
							width={1920*2}
							height={1080*2}
							sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 60vw"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</div>
			</div>
			<BackgroundBeams className="z-[-2]" />
			<Footer />
		</main>
	);
}
