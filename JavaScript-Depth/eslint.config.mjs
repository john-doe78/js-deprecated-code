import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
    },
    rules: {
      "quotes": ["error", "double"],
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "semi": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];