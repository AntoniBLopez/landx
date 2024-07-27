import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function constructMetadata({
	title = "LandX",
	description = "Design your own Landing page with AI.",
	image = "/landx.png",
	icons = "/favicon.png",
	noIndex = false,
}: {
	title?: string;
	description?: string;
	image?: string;
	icons?: string;
	noIndex?: boolean;
} = {}): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image
				},
			],
		},
		icons,
		metadataBase: new URL("https://landx-red.vercel.app/"),
		...(noIndex && {
			robots: {
				index: false,
				follow: false,
			},
		}),
	};
}
