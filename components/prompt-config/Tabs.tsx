interface Props {
  sectionSelected: string;
  onChangeSection: (value: string) => void;
}

export function Tabs({sectionSelected, onChangeSection}: Props) {
	return (
		<div className="w-full h-[38px] rounded-full mx-auto text-sm bg-white dark:bg-[#121212] dark:text-white">
			<button
				className={`w-1/3 h-full px-6 rounded-tl-full rounded-bl-full ${
					sectionSelected === "business" &&
					"text-white font-semibold bg-violet-600 dark:bg-violet-800"
				}`}
				onClick={() => onChangeSection("business")}
			>
				Description
			</button>
			<button
				className={`w-1/3 h-full px-6 ${
					sectionSelected === "style" &&
					"text-white font-semibold bg-violet-600 dark:bg-violet-800"
				}`}
				onClick={() => onChangeSection("style")}
			>
				Design
			</button>
			<button
				className={`w-1/3 h-full px-6 rounded-tr-full rounded-br-full ${
					sectionSelected === "tech" &&
					"text-white font-semibold bg-purple-600 dark:bg-purple-800"
				}`}
				onClick={() => onChangeSection("tech")}
			>
				Output
			</button>
		</div>
	);
}
