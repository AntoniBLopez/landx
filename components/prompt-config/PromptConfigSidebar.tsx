"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Tabs } from "./Tabs";
import { Form } from "./Form";
import { initialFormData, usePromptConfigStore } from "@/store/prompt-config";
import { FormData } from "@/types";
import { usePathname } from "next/navigation";

export function PromptConfigSidebar() {
	const [sectionSelected, setSectionSelected] = useState<string>("business");
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const savePromptConfig = usePromptConfigStore(
		(state) => state.savePromptConfig
	);
	const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
	const closeSideMenu = useUIStore((state) => state.closeSideMenu);
	const openSideMenu = useUIStore((state) => state.openSideMenu);
	const currentPath = usePathname();

	// Cerrar el menu al presionar el botón X
	const handleCloseMenu = () => {
		closeSideMenu();
	};

	// Cambiar de sección del formulario
	const handleSectionChange = (section: string) => {
		setSectionSelected(section);
	};

	// Agrega los datos ingresados al state
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleFormChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
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

		savePromptConfig(formData);
		setFormData(initialFormData);
	};

	useEffect(() => {
		if (currentPath === "/create") {
			openSideMenu();
		}

		return () => closeSideMenu();
	}, [currentPath]);

	return (
		<aside
			className={`z-50 h-screen md:relative min-w-full md:min-w-[380px] border-l border-l-[#000000b3] dark:border-l-gray-400 transition-[margin] bg-background md:bg-transparent ${
				isSideMenuOpen
					? "absolute md:mr-0"
					: "relative mr-[-1000px] md:mr-[-380px]"
			}`}
		>
			<header className="h-[75px] px-5 mb-8 flex justify-between items-center border-b border-b-[#000000b3] dark:border-b-gray-400">
				<h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
					¡Configure Your Landing Page!
				</h2>
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

				<Form
					sectionSelected={sectionSelected}
					formData={formData}
					onFormChange={handleFormChange}
				/>
			</section>

			<footer className="absolute bottom-8 w-full h-[50px] flex justify-center">
				<button
					className="w-[90%] h-[48px] rounded-sm bg-purple-500 text-white hover:bg-purple-700 font-bold"
					onClick={handleSend}
				>
					{sectionSelected !== "tech" ? "Continue" : "Save"}
				</button>
			</footer>
		</aside>
	);
}
