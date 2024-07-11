import Image from 'next/image'
import { ThemeModeToggle } from '../theme-mode/ThemeMode'


export const TopMenu = () => {
	return (
		// <nav >
		// 	<div>
		// 		<h1>Land X</h1>
		// 	</div>
		// </nav>
		<nav className="bg-white border-b border-gray-200 fixed z-30 w-full dark:bg-slate-900 dark:border-slate-700">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						<a
							href="#"
							className="text-xl font-bold flex items-center lg:ml-2.5"
						>
							{/* Logo */}
							<Image
								src='/assets/imgs/lx.png'
								alt="Logo Oficial de Land X"
								width={50}
								height={50}
							/>
							<span className="self-center whitespace-nowrap ml-2">
								{' '}
                  LandX
							</span>
						</a>
					</div>
					<div className="flex items-center">
						{/* User Avatar */}
						{/* <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                FH
						</div> */}
						<ThemeModeToggle />
					</div>
				</div>
			</div>
		</nav>
	)
}