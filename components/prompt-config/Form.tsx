interface Props {
  sectionSelected: string;
}

export function Form({sectionSelected}: Props) {
	return (
		<form>
			{sectionSelected === "business" && (
				<fieldset className="flex flex-col gap-4">
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Name</span>
						<input
							className="h-[48px] py-2 px-6  rounded-sm"
							type="text"
							placeholder="Ej. ACME Corporation"
						/>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Description</span>
						<textarea
							className="h-[115px] py-2 px-6 rounded-sm resize-none"
							placeholder="Ej. Solving problems you didn't know you had with solutions you didn't know you needed. Innovation guaranteed (supposedly)."
						></textarea>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Email</span>
						<input
							className="h-[48px] py-2 px-6  rounded-sm"
							type="email"
							placeholder="Ej. example@acme.com"
						/>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">
							Call To Action
						</span>
						<input
							className="h-[48px] py-2 px-6  rounded-sm"
							type="email"
							placeholder="Ej. Join ACME Now"
						/>
					</label>
				</fieldset>
			)}
			{sectionSelected === "style" && (
				<fieldset className="flex flex-col gap-4">
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">
							Primary Color
						</span>
						<input
							className="w-full h-[48px] p-[2px] bg-white rounded-sm hover:cursor-cell"
							type="color"
							name="color"
							id="color"
						/>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">
							Secondary Color
						</span>
						<input
							className="w-full h-[48px] p-[2px] bg-white rounded-sm hover:cursor-cell"
							type="color"
							name="color"
							id="color"
						/>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Font</span>
						<select className="w-full h-[48px] py-2 px-6  rounded-sm">
							<option value="Arial">Arial</option>
							<option value="Verdana">Verdana</option>
							<option value="Helvetica">Helvetica</option>
							<option value="Times New Roman">Times New Roman</option>
							<option value="Courier New">Courier New</option>
							<option value="Georgia">Georgia</option>
							<option value="Palatino">Palatino</option>
							<option value="Garamond">Garamond</option>
							<option value="Comic Sans MS">Comic Sans MS</option>
							<option value="Trebuchet MS">Trebuchet MS</option>
							<option value="Arial Black">Arial Black</option>
							<option value="Impact">Impact</option>
						</select>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Style</span>
						<select className="w-full h-[48px] py-2 px-6  rounded-sm">
							<option value="modern">Modern</option>
							<option value="classic">Classic</option>
							<option value="minimalist">Minimalist</option>
						</select>
					</label>
				</fieldset>
			)}
			{sectionSelected === "tech" && (
				<fieldset className="flex flex-col gap-4">
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Tech Stack</span>
						<select className="w-full h-[48px] py-2 px-6  rounded-sm">
							<option value="JAMstack">Vanilla</option>
							<option value="MERN">MERN</option>
							<option value="MEAN">MEAN</option>
						</select>
					</label>
				</fieldset>
			)}
		</form>
	);
}
