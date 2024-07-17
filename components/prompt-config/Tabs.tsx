interface Props {
  sectionSelected: string;
  onChangeSection: (value: string) => void;
}

export function Tabs({sectionSelected, onChangeSection}: Props) {
	return (
		<div className="w-full h-[38px] rounded-full mx-auto text-sm border border-gray-300 bg-white dark:bg-[#121212] dark:text-white">
			<button
				className={`w-1/3 h-full px-6 rounded-tl-full rounded-bl-full ${
					sectionSelected === "business" &&
					"text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500"
				}`}
				onClick={() => onChangeSection("business")}
			>
				Business
			</button>
			<button
				className={`w-1/3 h-full px-6 border-x border-x-gray-300 ${
					sectionSelected === "style" &&
					"text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500"
				}`}
				onClick={() => onChangeSection("style")}
			>
				Style
			</button>
			<button
				className={`w-1/3 h-full px-6 rounded-tr-full rounded-br-full ${
					sectionSelected === "tech" &&
					"text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500"
				}`}
				onClick={() => onChangeSection("tech")}
			>
				Tech
			</button>
		</div>
	);
}
