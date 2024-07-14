import { Header } from "@/components/ui/header/Header";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className="main-container">
				<Header />
				{children}
			</main>
		</>
	);
}
