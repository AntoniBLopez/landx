"use client";

import { useEffect, useState, FormEvent } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/input-vanisher";
import { qualityPrompt } from "@/utils";
import { InputApiKey } from "@/components/input-apikey";
import { usePromptConfigStore } from "@/store/prompt-config";
import { placeholders } from "@/utils";
import { getSession } from "@/app/api/session/getSession";

export default function Page() {
	const [generation, setGeneration] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [input, setInput] = useState("")
	const [aiResponse, setAiResponse] = useState("")
	const [time, setTime] = useState(true)
	const promptConfig = usePromptConfigStore((state) => state.promptConfig)
	const api = usePromptConfigStore((state) => state.api)

	useEffect(()=>{
		async function c() {
			const result = await getSession(localStorage.getItem('session')!!)
			if(result.session === false) window.location.assign('/login')
		}
		c()
	}, [])

	const onSubmit = async (event: FormEvent) => {
		console.log(event)
		event.preventDefault()
		setIsLoading(true)

		const prompt = qualityPrompt({
			input,
			businessName: promptConfig.business__name,
			email: promptConfig.business__email,
			serviceDescription: promptConfig.business__description,
			callToActionButtonName: promptConfig.business__CTA,
			mainColor: promptConfig.style__primaryColor,
			secondaryColor: promptConfig.style__secondaryColor,
			font: promptConfig.style__font,
			stack: promptConfig.tech__stack,
			foldersTech:
				"HTML para la estructura, CSS para el estilo, y JavaScript para la interactividad, y si es necesario, usar React.",
		});

		await fetch("/api/chat", {
			method: "POST",
			body: JSON.stringify({
				prompt,
				api,
			}),
		}).then((response) => {
			response.json().then((json) => {
				setAiResponse(json);
				setGeneration(json.text);
				setIsLoading(false);
			});
		});
	};

	useEffect(() => {
		if (aiResponse) {
			fetch("/api/create-files", {
				method: "POST",
				body: JSON.stringify({
					aiResponse,
				}),
			})
				.then((response) => {
					response.json().then((json) => {
						console.log(json);
					});
				})
				.catch((error) => {
					console.error(error);
				});
			console.log("aiResponse", aiResponse);
		}
	}, [aiResponse]);

	return (
		<>
			<main className="flex w-full h-full pt-15 flex-col items-center justify-center">

				{generation && (
					<>
						<h1 className="pb-3">Response.</h1>

						<div className="overflow-y-auto max-h-80 w-full max-w-2xl border border-gray-200 mb-10">
							{generation}
						</div>
					</>
				)}
				{
					isLoading
					&&
					<p className="h-1 pb-10">Loading...</p>
				}

				<h1 className="mb-10 outlinedLabel text-transparent shadow-white">Input your vision.</h1>

				<PlaceholdersAndVanishInput
					placeholders={placeholders}
					onChange={(e) => setInput(e.target.value)}
					onSubmit={(event) => {
						if (time) {
							setTime(false);
							onSubmit(event);
							setTimeout(() => {
								setTime(true);
							}, 3000);
						}
					}}
				></PlaceholdersAndVanishInput>
				<InputApiKey />
				<BackgroundBeams className="z-[-2]" />
			</main>
			{/* <Sidebar /> */}
		</>
	);
}
