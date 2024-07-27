import { FormData } from "@/types";

interface Props {
	sectionSelected: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFormChange: (e: any) => void;
	formData: FormData
}

const fonts = [
	'Arial',
	'Verdana',
	'Helvetica',
	'Times New Roman',
	'Courier New',
	'Georgia',
	'Palatino',
	'Garamond',
	'Comic Sans MS',
	'Trebuchet MS',
	'Arial Black',
	'Impact'
]

export function Form({ sectionSelected, onFormChange, formData }: Props) {
	return (
		<form className="overflow-auto h-[60vh]">
			{sectionSelected === "business" && (
				<fieldset className="flex flex-col gap-4">
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Name</span>
						<input
							className="h-[48px] py-2 px-6  rounded-sm"
							name="landing__name"
							value={formData.landing__name}
							onChange={onFormChange}
							type="text"
							placeholder="Acme Corporation"
						/>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Description</span>
						<textarea
							className="h-[115px] py-2 px-6 rounded-sm resize-none"
							name="landing__description"
							value={formData.landing__description}
							onChange={onFormChange}
							placeholder="Make your vignettes more fun using Acme, the simplest and fastest tool on the market."
						></textarea>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Email</span>
						<input
							className="h-[48px] py-2 px-6  rounded-sm"
							name="user__email"
							value={formData.user__email}
							onChange={onFormChange}
							type="email"
							placeholder="example@acme.com"
						/>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">
							Call To Action
						</span>
						<input
							className="h-[48px] py-2 px-6  rounded-sm"
							name="landing__CTA"
							value={formData.landing__CTA}
							onChange={onFormChange}
							type="email"
							placeholder="Join now!"
						/>
					</label>
				</fieldset>
			)}
			{sectionSelected === "style" && (
				<fieldset className="flex flex-col gap-4">
					<div className="flex flex-row justify-between gap-2">
						<label className="flex flex-col w-1/2 items-center gap-2">
							<span className="text-sm text-gray-600 font-bold">
								Primary Color
							</span>
							<input
								className="colorSelector w-10 h-10 p-[2px] rounded-sm hover:cursor-cell bg-transparent"
								name="style__colors"
								value={formData.style__colors[0]}
								onChange={onFormChange}
								type="color"
								id="color"
							/>
						</label>
						<label className="flex flex-col w-1/2 items-center gap-2">
							<span className="text-sm text-gray-600 font-bold">
								Secondary Color
							</span>
							<input
								className="colorSelector w-10 h-10 p-[2px] bg-transparent hover:cursor-cell"
								name="style__secondaryColor"
								value={formData.style__colors[1]}
								onChange={onFormChange}
								type="color"
								id="color"
							/>
						</label>
					</div>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Font</span>
						<select
							className="w-full h-[48px] py-2 px-6 rounded-sm"
							name="style__font"
							value={formData.style__fontFamilies[0]}
							onChange={onFormChange}
						>
							{
								fonts.map((font, index) =>
									<option key={index} style={{ fontFamily: font }} value={font}>{font}</option>
								)
							}
						</select>
						<span className="text-sm text-gray-600 font-bold">
							Weight ({formData.style__fontWeight})
						</span>
						<input min={100} max={900} step={100} name="style__fontweight" type="range" value={formData.style__fontWeight} onChange={onFormChange}></input>
						<h1 style={{ fontFamily: formData.style__fontFamilies[0], fontWeight: formData.style__fontWeight }} className="text-center">example</h1>
					</label>
					<label className="flex flex-col gap-2">
						<span className="text-sm text-gray-600 font-bold">Page style</span>
						<select
							className="w-full h-[48px] py-2 px-6 rounded-sm"
							name="style__styleDesign"
							value={formData.style__landingDesign}
							onChange={onFormChange}
						>
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
						<select
							className="w-full h-[48px] py-2 px-6 rounded-sm"
							value={formData.tech__stack}
							name="tech__stack"
							onChange={onFormChange}
						>
							<option value="Vanilla">Vanilla</option>
							<option value="React">React</option>
							<option value="Next">Next</option>
						</select>
					</label>
				</fieldset>
			)}
		</form>
	);
}
