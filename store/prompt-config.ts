import { create } from "zustand";
import { Api, FormData } from "@/types";

export const initialFormData: FormData = {
	business__name: "",
	business__description: "",
	business__email: "",
	business__CTA: "",
	style__primaryColor: "#1e90ff",
	style__secondaryColor: "#ffffff",
	style__font: "Arial",
	style__styleDesingn: "Modern",
	tech__stack: "Vanilla",
};

const initialApi: Api = {
	apiKey: "",
	apiProvider: "",
};

export interface State {
	promptConfig: FormData;
	api: Api;
	savePromptConfig: (config: FormData) => void;
	saveApi: (api: Api) => void;
}

export const usePromptConfigStore = create<State>()((set) => ({
	promptConfig: initialFormData,
	api: initialApi,
	savePromptConfig: (config: FormData) => set({ promptConfig: config }),
	saveApi: (api: Api) => set({ api }),
}));
