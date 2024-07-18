import { create } from "zustand";
import { FormData } from "@/types";

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
