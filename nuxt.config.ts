import Aura from "@primeuix/themes/aura"
import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@primevue/nuxt-module", "@nuxt/eslint", "@nuxt/image"],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Laurence Troy V - Full Stack Developer | Mobile App Developer",
      meta: [
        {
          name: "description",
          content: "Experienced Full Stack Developer specializing in Vue.js, React, Flutter, and cloud technologies. Based in Cagayan de Oro, Philippines. Available for freelance projects and full-time opportunities.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://laurencetroyv.dev",
        },
      ],
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
    formSubmit: "",
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
