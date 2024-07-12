import { Logo } from '../logo'
import { ProfileTabButton } from '../profile-tab-button/ProfileTabButton'
import { ThemeModeToggle } from '../theme-mode/ThemeMode'

export const Header = () => {

	return (
		<nav className="border-gray-200 fixed z-30 w-full bg-background pb-4">
			<div className="px-3 py-3 lg:px-5 lg:pl-5 flex">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						{/* User Avatar */}
						{/* <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">FH</div> */}
						<ThemeModeToggle />
					</div>
				</div>
				<a href='/' className={'mx-auto'}>
					<Logo></Logo>
				</a>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						{/* User Avatar */}
						{/* <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">FH</div> */}
						<ProfileTabButton />
					</div>
				</div>
			</div>
			<div className='h-[1px] mx-auto bg-black/70 dark:bg-gray-400 w-[80vw] mt-2'></div>
		</nav>
	)
}