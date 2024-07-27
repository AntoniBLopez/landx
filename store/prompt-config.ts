import { create } from "zustand";
import { Api, FormData } from "@/types";

export const initialFormData: FormData = {
	landing__name: "",
	landing__description: "",
	landing__CTA: "",
	user__email: "",
	style__colors: ["#1e90ff", "#ffffff"],
	style__fontFamilies: ["Arial", "Helvetica"],
	style__landingDesign: "Modern",
	style__fontWeight: 400,
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
