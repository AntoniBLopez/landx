'use client'
import Main from "@/app/Main"
import Footer from "./Footer"
import Header from "./Header"
import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store"

export default function Page() {
	const actualTheme = useAppSelector((state: RootState) => state.store.theme)

	return (
		<div className={`${actualTheme === 'light' ? 'light' : 'dark'}`}>
			<div className="text-black dark:text-white bg-white dark:bg-blackDefault">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}