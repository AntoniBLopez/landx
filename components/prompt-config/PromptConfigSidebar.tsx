"use client";

import { useState } from "react";
import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Tabs } from "./Tabs";

export function PromptConfigSidebar() {
	const [sectionSelected, setSectionSelected] = useState<string>("business");
	const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
	const closeSideMenu = useUIStore((state) => state.closeSideMenu);

	// Cerrar el menu al presionar el botón X
	const handleCloseMenu = () => {
		closeSideMenu();
	};

	// Cambiar de sección del formulario
	const handleSectionChange = (section: string) => {
		setSectionSelected(section);
	};

	// Envio de datos
	const handleSend = () => {
		if (sectionSelected === "business") {
			handleSectionChange("style");
			return;
		} else if (sectionSelected === "style") {
			handleSectionChange("tech");
			return;
		}

		// TODO: Envio del formulario...
	};

	return (
		<aside
			className={`z-50 h-screen md:relative min-w-full md:min-w-[380px] border-l border-l-[#000000b3] dark:border-l-gray-400 transition-[margin] bg-background md:bg-transparent ${
				isSideMenuOpen
					? "absolute md:mr-0"
					: "relative mr-[-1000px] md:mr-[-380px]"
			}`}
		>
			<header className="h-[75px] px-5 mb-8 flex justify-between items-center border-b border-b-[#000000b3] dark:border-b-gray-400">
				<h2 className="font-bold text-md">¡Configure Your Landing Page!</h2>
				<Button
					onClick={handleCloseMenu}
					variant="ghost"
					size="icon"
					className="cursor-pointer"
				>
					<X strokeWidth={1} />
				</Button>
			</header>

			<section className="flex flex-col gap-8 px-5">
				<Tabs
					sectionSelected={sectionSelected}
					onChangeSection={handleSectionChange}
				/>

				<form>
					{sectionSelected === "business" && <p>Business</p>}
					{sectionSelected === "style" && <p>Style</p>}
					{sectionSelected === "tech" && <p>Tech</p>}
				</form>
			</section>

			<footer className="absolute bottom-8 w-full h-[50px] flex justify-center">
				<button
					className="w-[90%] h-[48px] rounded-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold"
					onClick={handleSend}
				>
					{sectionSelected !== "tech" ? "Continue" : "Save"}
				</button>
			</footer>
		</aside>
	);
}
