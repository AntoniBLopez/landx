import { Header } from '@/components/ui/header/Header'
import { Footer } from '@/components/ui/footer/Footer'

export default function MainLayout({children}: {children: React.ReactNode}) {

	return (
		<main className="main-container block">
			<Header />
			{children}
			<Footer />
		</main>
	)
}