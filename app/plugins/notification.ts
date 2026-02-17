import ToastService from "primevue/toastservice"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ToastService)

  return {
    provide: {
      toast: nuxtApp.vueApp.config.globalProperties.$toast,
    },
  }
})
