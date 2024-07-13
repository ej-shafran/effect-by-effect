import base from "@effect-by-effect/eslint-config/base.js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  ...base,
  jsxA11y.flatConfigs.recommended,
  {
    ...reactHooks.configs.recommended,
    plugins: {
      "react-hooks": reactHooks,
    },
  },
  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "error",
        { allowConstantExport: true },
      ],
    },
  },
);
