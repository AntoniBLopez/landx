import { TopMenu } from '@/components/ui/header/Header'

export default function MainLayout({children}: {children: React.ReactNode}) {
	
	return (
		<main className="main-container block">
			<TopMenu />
			{children}
		</main>
	)
}