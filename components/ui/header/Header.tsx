"use client"

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { ProfileTabButton } from "@/components/ui/profile-tab-button/ProfileTabButton";
import { ThemeModeToggle } from "@/components/ui/theme-mode/ThemeMode";
import { useUIStore } from "@/store/ui-store";

export const Header = () => {
	const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
	const closeSideMenu = useUIStore((state) => state.closeSideMenu)

	return (
		<nav className={`border-gray-200 fixed z-30 transition-[width] ${isSideMenuOpen ? "w-[calc(100vw-380px)]" : "w-full"} bg-background pb-4`}>
			<div className="px-3 py-3 lg:px-5 lg:pl-5 flex">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						{/* User Avatar */}
						{/* <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">FH</div> */}
						<ThemeModeToggle />
					</div>
				</div>
				<Link onClick={closeSideMenu} href="/" className={"mx-auto"}>
					<Logo />
				</Link>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						{/* User Avatar */}
						{/* <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">FH</div> */}
						<ProfileTabButton />
					</div>
				</div>
			</div>
			<div className={`h-[1px] mx-auto bg-black/70 dark:bg-gray-400 ${isSideMenuOpen ? "w-[100%]" : "w-[80%]"}`}></div>
		</nav>
	);
};
