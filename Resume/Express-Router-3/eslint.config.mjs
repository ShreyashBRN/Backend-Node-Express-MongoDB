import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // tells ESLint it's Node CommonJS (not ESM or browser)
      globals: {
        ...globals.node, // ✅ enables require, module, __dirname, etc.
      },
    },
  }
]);
