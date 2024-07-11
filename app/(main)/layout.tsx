import { TopMenu } from '@/components/ui/top-menu/TopMenu'




export default function MainLayout({children}: {children: React.ReactNode}) {


	return (
		<>
			<main className="main-container">
				<TopMenu />
				{children}
			</main>
		</>
	)
}