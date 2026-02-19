<template>
  <div
    class="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
  >
    <div class="flex flex-col items-center text-center space-y-3">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
      >
        <Icon
          :name="icon"
          size="32"
        />
      </div>

      <div>
        <h4 class="font-semibold text-slate-50 text-sm">
          {{ name }}
        </h4>
      </div>
    </div>

    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
      :class="`bg-linear-to-r ${color}`"
      style="filter: blur(20px); z-index: -1;"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  icon: string
  color: string
}

defineProps<Props>()
</script>

<style scoped>
/* Additional hover effects */
.group:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
</style>
