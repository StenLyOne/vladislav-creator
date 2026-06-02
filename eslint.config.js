import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import globals from "globals";

const eslintConfig = [
  { ignores: [".next/**", "out/**", "dist/**"] },
  js.configs.recommended,
  ...nextVitals,
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "react/jsx-no-target-blank": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
