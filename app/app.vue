<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <Analytics v-if="isProduction" />
    <SpeedInsights v-if="isProduction" />

    <app-navigation />

    <main class="relative mt-[65px]">
      <section
        id="home"
        class="min-h-screen"
      >
        <HeroSection />
      </section>

    <!--      <section -->
    <!--        id="overview" -->
    <!--        class="py-20" -->
    <!--      > -->
    <!--        <OverviewSection /> -->
    <!--      </section> -->

    <!--      <section -->
    <!--        id="tech-stack" -->
    <!--        class="py-20 bg-slate-900/50" -->
    <!--      > -->
    <!--        <TechStackSection /> -->
    <!--      </section> -->

    <!--      <section -->
    <!--        id="experience" -->
    <!--        class="py-20" -->
    <!--      > -->
    <!--        <ExperienceSection /> -->
    <!--      </section> -->

    <!--      <section -->
    <!--        id="portfolio" -->
    <!--        class="py-20 bg-slate-900/50" -->
    <!--      > -->
    <!--        <PortfolioSection /> -->
    <!--      </section> -->

    <!--      <section -->
    <!--        id="clients" -->
    <!--        class="py-16" -->
    <!--      > -->
    <!--        <ClientsSection /> -->
    <!--      </section> -->

    <!--      <section -->
    <!--        id="certificates" -->
    <!--        class="py-20 bg-slate-900/50" -->
    <!--      > -->
    <!--        <CertificatesSection /> -->
    <!--      </section> -->
    </main>

    <footer
      id="contact"
      class="bg-slate-900 border-t border-slate-800"
    >
      <ContactFooter />
    </footer>

    <PrimevueScrollTop />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const config = useRuntimeConfig()

const isProduction = config.public.appEnv === "production"

// SEO and Meta
useHead({
  title: "Laurence Troy V - Full Stack Developer | Mobile App Developer | Cloud Engineer",
  meta: [
    {
      name: "description",
      content: "Experienced Full Stack Developer specializing in Vue.js, React, Flutter, and cloud technologies. Based in Cagayan de Oro, Philippines. Available for freelance projects and full-time opportunities.",
    },
    {
      name: "keywords",
      content: "Full Stack Developer, Mobile App Developer, Cloud Engineer, Vue.js, React, Flutter, TypeScript, PHP, Laravel, Nuxt.js, Firebase, AWS",
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

// Smooth scrolling functionality
onMounted(() => {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth"
})
</script>

<style>
@reference "tailwindcss";

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-700 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-600;
}

/* Smooth animations */
* {
  scroll-margin-top: 80px; /* Account for fixed navbar */
}
</style>
