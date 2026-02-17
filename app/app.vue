<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Analytics />
  <SpeedInsights />
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
