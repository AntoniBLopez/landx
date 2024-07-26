import { Header } from "@/components/ui/header/Header";
import { PromptConfigSidebar } from "@/components/prompt-config";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<div className="flex overflow-hidden text-black dark:text-white">
			<div className="main-container w-full">
				<Header />
				{children}
			</div>
			<PromptConfigSidebar />
		</div>
	);
}
