// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";

const dirname = fileURLToPath(new URL("../..", import.meta.url));

export default tseslint.config(
  { ignores: ["**/build/**", "**/dist/**"] },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["./*.js"],
          defaultProject: "./tsconfig.json",
        },
        tsconfigRootDir: dirname,
      },
    },
  },
  {
    // Disable type-aware linting on JS files
    files: ["**/*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
);
