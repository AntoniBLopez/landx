import { create } from "zustand";

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

export const initialFormData:FormData = {
	business__name: "",
	business__description: "",
	business__email: "",
	business__CTA: "",
	style__primaryColor: "#1e90ff",
	style__secondaryColor: "#ffffff",
	style__font: "Arial",
	style__styleDesingn: "Modern",
	tech__stack: "Vanilla"
}

interface State {
	promptConfig: FormData;
  savePromptConfig: (config: FormData) => void;
}

export const usePromptConfigStore = create<State>()((set) => ({
	promptConfig: initialFormData,
  savePromptConfig: (config: FormData) => set({ promptConfig: config })
}));
