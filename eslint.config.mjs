import globals from "globals"
import pluginVue from "eslint-plugin-vue"
import perfectionist from "eslint-plugin-perfectionist"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt([
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}"],
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": ["error"],

      "perfectionist/sort-named-imports": ["error"],

      "vue/no-unused-emit-declarations": ["error"],
      "vue/no-empty-component-block": ["error"],
      "vue/component-options-name-casing": ["error", "kebab-case"],

      "@stylistic/quotes": ["error", "double"],

      "vue/multi-word-component-names": ["off"],

      "semi": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
    },
    settings: {
      perfectionist: {
        type: "line-length",
        order: "asc",
        ignoreCase: true,
        newlinesBetween: "always",
      },
    },

    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
])
