import type { ToastMessageOptions } from "primevue"

function useNotificationComposable() {
  function createNotification(
    title: string,
    {
      message = "",
      severity,
    }: { message?: string; severity: ToastMessageOptions["severity"] },
  ) {
    const { $toast } = useNuxtApp()

    $toast.add({
      summary: title,
      detail: message,
      life: 5000,
      severity: severity,
    })
  }

  function notifySuccess(title: string, message?: string) {
    return createNotification(title, { message, severity: "success" })
  }

  function notifyError(title: string, message?: string) {
    return createNotification(title, { message, severity: "error" })
  }

  function notifyInfo(title: string, message?: string) {
    return createNotification(title, { message, severity: "info" })
  }

  function notifyWarning(title: string, message?: string) {
    return createNotification(title, { message, severity: "warn" })
  }

  function notifyContrast(title: string, message?: string) {
    return createNotification(title, { message, severity: "contrast" })
  }

  function notifySecondary(title: string, message?: string) {
    return createNotification(title, { message, severity: "secondary" })
  }

  return {
    notifyInfo,
    notifyError,
    notifySuccess,
    notifyWarning,
    notifyContrast,
    notifySecondary,
  }
}

export const {
  notifyInfo,
  notifyError,
  notifySuccess,
  notifyWarning,
  notifyContrast,
  notifySecondary,
} = useNotificationComposable()
