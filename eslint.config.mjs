import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	{
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"no-trailing-spaces": "error",
			"no-tabs": "off",
			"@typescript-eslint/indent": ["error", "tab"],
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-floating-promises": "off",
		},
	},
];
