interface Props {
  sectionSelected: string;
  onChangeSection: (value: string) => void;
}

export function Tabs({sectionSelected, onChangeSection}: Props) {
	return (
		<div className="w-full h-[38px] rounded-full mx-auto text-sm bg-white dark:bg-[#121212] dark:text-white">
			<button
				className={`w-1/3 h-full px-6 hover:bg-violet-300/50 hover:text-white rounded-tl-full rounded-bl-full ${
					sectionSelected === "business" &&
					"text-white font-semibold dark:bg-violet-600 bg-violet-400"
				}`}
				onClick={() => onChangeSection("business")}
			>
				Description
			</button>
			<button
				className={`w-1/3 h-full px-6 hover:bg-violet-300/50 hover:text-white ${
					sectionSelected === "style" &&
					"text-white font-semibold dark:bg-violet-600 bg-violet-400"
				}`}
				onClick={() => onChangeSection("style")}
			>
				Design
			</button>
			<button
				className={`w-1/3 h-full px-6 hover:bg-violet-300/50 hover:text-white rounded-tr-full rounded-br-full ${
					sectionSelected === "tech" &&
					"text-white font-semibold dark:bg-violet-600 bg-violet-400"
				}`}
				onClick={() => onChangeSection("tech")}
			>
				Output
			</button>
		</div>
	);
}
