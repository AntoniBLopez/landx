"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header/Header";
import { useUIStore } from "@/store/ui-store";
import { X } from "lucide-react";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
	const closeSideMenu = useUIStore((state) => state.closeSideMenu);

	const handleCloseMenu = () => {
		closeSideMenu();
	};
	return (
		<div className="flex overflow-hidden">
			<div className="main-container w-full">
				<Header />
				{children}
			</div>

			<aside className={`relative min-w-[380px] border-l border-l-[#000000b3] dark:border-l-gray-400 transition-[margin] ${isSideMenuOpen ? "mr-0" : "mr-[-380px]"}`}>
				<header className="h-[83px] px-5 flex justify-between items-center border-b border-b-[#000000b3] dark:border-b-gray-400">
					<h2 className="font-bold text-sm">Configure your prompt</h2>
					<Button
						onClick={handleCloseMenu}
						variant="ghost"
						size="icon"
						className="cursor-pointer"
					>
						<X strokeWidth={0.8} />
					</Button>
				</header>
			</aside>
		</div>
	);
}
