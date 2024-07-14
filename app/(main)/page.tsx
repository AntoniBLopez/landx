"use client";

import { ArrowDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Chat() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // duración de la animación en milisegundos
		});
	}, []);

	return (
		<main className="flex w-full flex-col items-center justify-center px-4 sm:px-8">
			<div className="text-center mx-auto mt-20 sm:mt-36 pb-10">
				<h2 className="text-xl sm:text-2xl font-semibold mt-5">Welcome to</h2>
				<h1 className="text-5xl sm:text-7xl">LANDX</h1>
				<br />
				<div className="flex flex-wrap justify-center sm:flex-row mx-auto text-center w-full sm:w-max">
					<h3 className="text-lg sm:text-2xl font-bold my-auto">
						Ever wanted to create a
					</h3>
					<h3 className="text-2xl sm:text-3xl font-bold px-1.5 my-auto">PRO</h3>
					<h3 className="text-lg sm:text-2xl font-bold my-auto">land page..</h3>
				</div>
				<h2 className="mb-12 sm:mb-28 bg-black/10 dark:bg-black/20 w-max mx-auto rounded-md px-4 mt-2 gradient-border">
					<div className="gradient-text opacity-10" />
					<span className="text-white font-bold">
						but never knew how or where to start?
					</span>
				</h2>
				<div className="flex w-full justify-center mb-12 sm:mb-28">
					<Link
						href="/create"
						className="text-md sm:text-lg font-normal py-2 px-4 rounded-lg bg-cyan-500 text-white"
					>
						Get started!
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
							src="/example.png"
							className="rounded-xl"
							data-aos="fade-up"
							alt="Template"
							width={1600}
							height={854}
							sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 60vw"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</div>
			</div>
			<BackgroundBeams className="z-[-2]" />
		</main>
	);
}
