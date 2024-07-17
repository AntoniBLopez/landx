"use client";

import { useEffect, useState, FormEvent } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/input-vanisher";
import { InputApiKey } from "@/components/input-apikey";
import { Sidebar } from "@/components/ui/sidebar/Sidebar";
import { placeholders, qualityPrompt } from "@/utils";

export default function Chat() {
	const [generation, setGeneration] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [input, setInput] = useState("");
	const [aiResponse, setAiResponse] = useState("");
	const [time, setTime] = useState(true);

	const onSubmit = async (event: FormEvent) => {
		console.log(event);
		event.preventDefault(); // Previene el comportamiento predeterminado del formulario
		setIsLoading(true);

		const prompt = qualityPrompt({
			input,
			businessName: "Business Analysis",
			email: "business@analysis.com",
			serviceDescription:
				"En Business Analysis, ofrecemos servicios de análisis de negocios que te permiten tomar decisiones informadas y estratégicas. Nuestro enfoque basado en datos y nuestra experiencia en diversas industrias nos permiten proporcionar información valiosa y personalizada que impulsa el crecimiento y la eficiencia de tu empresa.",
			callToActionButtonName: "Empieza Ahora",
			mainColor: "#1d21f5",
			secondaryColor: "#2673d1",
			font: "Bricolage",
			stack:
				"HTML5, CSS3 (preferentemente con Flexbox o Grid), y JavaScript (opcional). Puede usar un framework como Bootstrap, React, Vite, o NextJS si es necesario.",
			foldersTech:
				"HTML para la estructura, CSS para el estilo, y JavaScript para la interactividad (si es necesario), si es necesario, usar React.",
		});

		await fetch("/api/chat", {
			method: "POST",
			body: JSON.stringify({
				prompt,
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
			<div className="flex overflow-hidden">
				<main className="flex w-full h-screen flex-col items-center justify-center">
					{generation && (
						<>
							<h1 className="mb-3">Response.</h1>

							<div className="overflow-y-auto max-h-80 w-full max-w-2xl border border-gray-200 mb-10">
								{generation}
							</div>
						</>
					)}

					<h1 className="mb-3">Input your vision.</h1>

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
					<p className="h-1">{isLoading && <span>Loading...</span>}</p>
					<BackgroundBeams className="z-[-2]" />
				</main>
				<Sidebar />
			</div>
		</>
	);
}
