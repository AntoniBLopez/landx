/* Typescript types */

export type ApiKey = string;

export type Theme = "light" | "dark" | "system";

export type ImageLoaderProps = {
	src: string;
	width: number;
};

export interface FormData {
	landing__name: string;
	landing__description: string;
	landing__CTA: string;
	user__email: string;
	style__colors: string[];
	style__fontFamilies: string[];
	style__fontWeight: number;
	style__landingDesign: string;
	tech__stack: string;
}

export interface LoginForm {
	name: string | null;
	email: string;
	password: string;
}

export interface Api {
	apiProvider: string;
	apiKey: string;
}
