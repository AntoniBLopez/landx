import Image from 'next/image'
import { ModeToggle } from '../theme-mode/ThemeMode'


export const TopMenu = () => {
	return (
		<nav className="bg-background border-b border-border fixed z-30 w-full dark:bg-background dark:border-border">
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
					<div className="">
						{/* Theme Mode Toggle */}
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	)
}