/* Typescript types */

export type ApiKey = string;

export type Theme = "light" | "dark" | "system";

export type ImageLoaderProps = {
	src: string;
	width: number;
};

export interface FormData {
	business__name: string;
	business__description: string;
	business__email: string;
	business__CTA: string;
	style__primaryColor: string;
	style__secondaryColor: string;
	style__font: string;
	style__styleDesingn: string;
	tech__stack: string;
}

export interface Api {
	apiProvider: string;
	apiKey: string;
}
