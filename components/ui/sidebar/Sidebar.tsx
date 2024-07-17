"use client";

import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui-store";
import { X } from "lucide-react";

export const Sidebar = () => {
	const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
	const closeSideMenu = useUIStore((state) => state.closeSideMenu);

	const handleCloseMenu = () => {
		closeSideMenu();
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<aside
			className={`z-50 h-screen md:relative min-w-full md:min-w-[380px] border-l border-l-[#000000b3] dark:border-l-gray-400 transition-[margin] bg-background md:bg-transparent ${
				isSideMenuOpen
					? "absolute md:mr-0"
					: "relative mr-[-1000px] md:mr-[-380px]"
			}`}
		>
			<header className="h-[75px] px-5 flex justify-between items-center border-b border-b-[#000000b3] dark:border-b-gray-400">
				<h2 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
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

			<form onSubmit={handleSubmit}>
				<div className="flex my-5 px-8 justify-end">
					<input
						type="button"
						value="Save"
						className="py-1 px-2 rounded-sm hover:cursor-pointer text-green-500 bg-transparent hover:text-white hover:bg-green-600"
					/>
				</div>
				<div className="flex flex-col px-8 gap-5">
					<div className="flex flex-col gap-2">
						<span className="font-bold text-2xl">Text</span>
						<div className="pl-2">
							<div className="flex flex-col gap-2">
								<input
									className="py-2 px-4 rounded-lg"
									type="text"
									name="businessName"
									id="businessName"
									placeholder="Business Name"
								/>
								<textarea
									className="py-2 px-4 min-h-10 max-h-48 rounded-lg"
									name="description"
									id="description"
									placeholder="Description"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-row pr-7 justify-between gap-5">
						<div className="flex flex-col gap-2">
							<span className="font-bold text-2xl">Color</span>
							<div className="pl-2">
								<div className="flex flex-row gap-2">
									<input
										className="w-10 h-10 bg-transparent rounded-full hover:cursor-cell"
										type="color"
										name="color"
										id="color"
									/>
								</div>
							</div>
						</div>

						{/* <div className="w-px h-100 bg-black dark:bg-white self-stretch"></div> */}

						<div className="flex flex-col gap-2">
							<span className="font-bold text-2xl">Style</span>
							<div className="pl-3">
								<div className="flex flex-row items-center gap-2">
									<input
										className="w-4 h-4 bg-transparent rounded-full hover:cursor-pointer"
										type="checkbox"
										name="color"
										id="color"
									/>
									<span>Modern</span>
								</div>
								<div className="flex flex-row items-center gap-2">
									<input
										className="w-4 h-4 bg-transparent rounded-full hover:cursor-pointer"
										type="checkbox"
										name="color"
										id="color"
									/>
									<span>Classic</span>
								</div>
								<div className="flex flex-row items-center gap-2">
									<input
										className="w-4 h-4 bg-transparent rounded-full hover:cursor-pointer"
										type="checkbox"
										name="color"
										id="color"
									/>
									<span>Minimalist</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</aside>
	);
};
