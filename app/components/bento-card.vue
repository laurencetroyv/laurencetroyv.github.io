<template>
  <div
    class="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    :class="cardClasses"
  >
    <div
      v-if="gradient"
      class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />

    <div
      v-if="accent"
      class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
    />

    <div class="relative z-10 p-6 h-full flex flex-col">
      <slot />
    </div>

    <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

    <div class="absolute inset-0 rounded-3xl border border-slate-700/50 group-hover:border-purple-400/30 transition-colors duration-500" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  gradient?: boolean
  accent?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gradient: false,
  accent: false,
  hoverable: true,
})

const cardClasses = computed(() => {
  const baseClasses = [
    "bg-slate-900/60",
    "backdrop-blur-sm",
    "border",
    "border-slate-800/50",
  ]

  if (props.hoverable) {
    baseClasses.push("cursor-pointer")
  }

  if (props.accent) {
    baseClasses.push("ring-1", "ring-green-500/20")
  }

  return baseClasses.join(" ")
})
</script>

<style scoped>
@reference "tailwindcss";

/* Additional card animations */
.group:hover {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(147, 51, 234, 0.1);
}

/* Smooth transitions for all child elements */
.group * {
  transition: all 0.3s ease;
}

/* Custom scrollbar for card content if needed */
:deep(*::-webkit-scrollbar) {
  width: 4px;
}

:deep(*::-webkit-scrollbar-track) {
  @apply bg-slate-800/50;
}

:deep(*::-webkit-scrollbar-thumb) {
  @apply bg-slate-600 rounded-full;
}
</style>
