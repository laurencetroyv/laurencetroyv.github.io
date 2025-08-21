import Aura from "@primeuix/themes/aura"
import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@primevue/nuxt-module", "@nuxt/eslint"],
  devtools: { enabled: true },
  app: {
    head: {
      script: [{
        "src": "https://cloud.umami.is/script.js",
        "async": true,
        "defer": true,
        "data-domains": "laurencetroyv.dev",
        "data-website-id": process.env.NUXT_UMAMI_WEBSITE_ID,
      }],
    },
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    appEnv: process.env.NUXT_PUBLIC_NODE_ENV,
    umamiWebsiteId: process.env.NUXT_UMAMI_WEBSITE_ID,
    formSubmit: process.env.NUXT_FORMSUBMIT,
  },

  compatibilityDate: "2025-07-15",

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  primevue: {
    components: {
      prefix: "Primevue",
    },
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        darkModeSelector: ".p-dark",
        options: {
          cssLayer: {
            name: "primevue",
            order: "theme, base, primevue",
          },
        },
        preset: {
          ...Aura,
          semantic: {
            ...Aura.semantic,
            primary: {
              50: "#eae9fc",
              100: "#d4d2f9",
              200: "#a9a5f3",
              300: "#7e78ed",
              400: "#534be7",
              500: "#281fe0",
              600: "#2018b4",
              700: "#181287",
              800: "#100c5a",
              900: "#08062d",
              950: "#040316",
            },
          },
        },
      },
    },
  },
})
