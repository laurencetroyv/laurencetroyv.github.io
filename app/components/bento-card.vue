<template>
  <div
    class="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    :class="cardClasses"
  >
    <div
      v-if="gradient"
      class="absolute inset-0 bg-linear-to-br from-primary-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />

    <div
      v-if="accent"
      class="absolute inset-0 bg-linear-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
    />

    <div class="relative z-10 p-6 flex flex-col">
      <slot />
    </div>

    <div class="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

    <div class="absolute inset-0 rounded-3xl border border-slate-700/50 group-hover:border-primary-400/30 transition-colors duration-500" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  gradient?: boolean
  accent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gradient: false,
  accent: false,
})

const cardClasses = computed(() => {
  const baseClasses = [
    "bg-slate-900/60",
    "backdrop-blur-sm",
    "border",
    "border-slate-800/50",
  ]

  if (props.accent) {
    baseClasses.push("ring-1", "ring-green-500/20")
  }

  return baseClasses.join(" ")
})
</script>
