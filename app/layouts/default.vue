<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <app-navigation />

    <slot />

    <footer
      id="contact"
      class="bg-slate-900 border-t border-slate-800"
    >
      <contact-footer />
    </footer>

    <Analytics />
    <SpeedInsights />
    <PrimevueScrollTop />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

useHead({
  title: "Laurence Troy V - Full Stack Developer | Mobile App Developer",
  meta: [
    {
      name: "description",
      content: "Experienced Full Stack Developer specializing in Vue.js, React, Flutter, and cloud technologies. Based in Cagayan de Oro, Philippines. Available for freelance projects and full-time opportunities.",
    },
    {
      name: "keywords",
      content: "Full Stack Developer, Mobile App Developer, Vue.js, React, Flutter, TypeScript, PHP, Laravel, Nuxt.js, Firebase, AWS",
    },
    {
      property: "og:title",
      content: "Laurence Troy V - Full Stack Developer",
    },
    {
      property: "og:description",
      content: "Experienced Full Stack Developer specializing in modern web and mobile technologies",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "author",
      content: "Laurence Troy V",
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
})

onMounted(() => {
  document.documentElement.style.scrollBehavior = "smooth"
})
</script>
