export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      toast: nuxtApp.vueApp.config.globalProperties.$toast,
    },
  }
})
