<!-- app/components/SectionContainer.vue -->
<template>
  <div
    class="relative py-20"
    :class="containerClasses"
  >
    <!-- Background Pattern (Optional) -->
    <div
      v-if="pattern"
      class="absolute inset-0 opacity-5"
    >
      <div
        class="absolute inset-0"
        style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
                  background-size: 20px 20px;"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        v-if="title || subtitle"
        class="text-center mb-16"
      >
        <h2
          v-if="title"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-4"
          :class="titleClass"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          {{ subtitle }}
        </p>

        <!-- Optional accent line -->
        <div
          v-if="accent"
          class="mt-6 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
        />
      </div>

      <!-- Main Content -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  background?: "default" | "dark" | "gradient"
  pattern?: boolean
  accent?: boolean
  titleClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  background: "default",
  pattern: false,
  accent: false,
  titleClass: "",
})

const containerClasses = computed(() => {
  const classes = []

  switch (props.background) {
    case "dark":
      classes.push("bg-slate-900/50")
      break
    case "gradient":
      classes.push("bg-gradient-to-br from-slate-950 via-slate-900 to-purple-900/10")
      break
    default:
      // Default transparent background
      break
  }

  return classes.join(" ")
})
</script>

<style scoped>
/* Intersection observer animations can be added here */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Custom background patterns */
.dots-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
