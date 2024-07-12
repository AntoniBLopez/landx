'use client'
import Main from "@/app/Main"
import Footer from "./Footer"
import Header from "./Header"

export default function Page() {
	return (
		<div className="text-black dark:text-white bg-white dark:bg-blackDefault">
			<Header />
			<Main />
			<Footer />
		</div>
	)
}