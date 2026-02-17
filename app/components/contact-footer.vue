<template>
  <footer
    id="contact"
    class="bg-slate-900 border-t border-slate-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Let's Work Together
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <PrimevueForm
            v-slot="$form"
            :initial-values="initialValues"
            :resolver="resolver"
            class="space-y-6"
            @submit="onSubmit"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Name <span class="text-red-400">*</span>
                </label>
                <PrimevueInputText
                  id="name"
                  placeholder="John Doe"
                  fluid
                  class="bg-slate-800/50 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-primary-400 focus:shadow-lg focus:shadow-primary-400/20"
                  required
                />
                <PrimevueMessage
                  v-if="$form.name?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                >
                  {{ $form.name?.error.message }}
                </primevuemessage>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email Address <span class="text-red-400">*</span>
                </label>
                <PrimevueInputText
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  fluid
                  class="bg-slate-800/50 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-primary-400 focus:shadow-lg focus:shadow-primary-400/20"
                  required
                />
                <PrimevueMessage
                  v-if="$form.email?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                >
                  {{ $form.email?.error.message }}
                </primevuemessage>
              </div>
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-slate-300 mb-2"
              >
                Subject <span class="text-red-400">*</span>
              </label>
              <PrimevueInputText
                id="subject"
                class="bg-slate-800/50 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-primary-400 focus:shadow-lg focus:shadow-primary-400/20"
                placeholder="Project inquiry, collaboration, etc."
                fluid
                required
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-slate-300 mb-2"
              >
                Message <span class="text-red-400">*</span>
              </label>
              <PrimevueTextarea
                id="message"
                placeholder="Tell me about your project, timeline, and requirements..."
                rows="6"
                class="bg-slate-800/50 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-primary-400 focus:shadow-lg focus:shadow-primary-400/20 resize-none"
                fluid
                required
              />
              <PrimevueMessage
                v-if="$form.message?.invalid"
                severity="error"
                size="small"
                variant="simple"
              >
                {{ $form.message?.error.message }}
              </primevuemessage>
            </div>

            <PrimevueButton
              type="submit"
              :label="isSubmitting ? 'Sending...' : 'Send Message'"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              fluid
              class="md:w-auto px-8 py-3 bg-linear-to-r from-primary-300 to-primary-400 hover:from-primary-500 hover:to-primary-600 border-0 font-semibold text-slate-200"
              icon="pi pi-send"
            />
          </PrimevueForm>
        </div>

        <div class="space-y-8 lg:pl-8">
          <div>
            <h3 class="text-2xl font-bold text-slate-50 mb-6">
              Get In Touch
            </h3>
            <p class="text-slate-400 leading-relaxed mb-8">
              Prefer to reach out directly? You can find me on these platforms or send me an email.
              I typically respond within 24 hours.
            </p>
          </div>

          <div class="space-y-6">
            <a
              href="mailto:laurencetroyv@gmail.com"
              class="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group"
            >
              <div class="w-12 h-12 bg-linear-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i class="pi pi-envelope text-white text-xl" />
              </div>
              <div>
                <h4 class="font-semibold text-slate-50">Email</h4>
                <p class="text-slate-400 text-sm">laurencetroyv@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/laurencetroyv"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group"
            >
              <div class="w-12 h-12 bg-linear-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i class="pi pi-linkedin text-white text-xl" />
              </div>
              <div>
                <h4 class="font-semibold text-slate-50">LinkedIn</h4>
                <p class="text-slate-400 text-sm">Connect with me professionally</p>
              </div>
            </a>

            <div class="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
              <div class="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <i class="pi pi-map-marker text-white text-xl" />
              </div>
              <div>
                <h4 class="font-semibold text-slate-50">
                  Location
                </h4>
                <p class="text-slate-400 text-sm">
                  Cagayan de Oro, Northern Mindanao, Philippines
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-800">
            <h4 class="font-semibold text-slate-50 mb-4">
              Download My Resume
            </h4>
            <div class="flex flex-col sm:flex-row gap-3">
              <PrimevueButton
                label="Download PDF"
                icon="pi pi-download"
                class="p-button-outlined border-primary-300 text-primary-300 hover:bg-primary-400 hover:text-white"
                @click="downloadResume"
              />
              <PrimevueButton
                label="View Online"
                icon="pi pi-external-link"
                class="p-button-text text-slate-400 hover:text-primary-300"
                @click="viewResume"
              />
            </div>
          </div>

          <div class="bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <h4 class="font-semibold text-green-400">
                Currently Available
              </h4>
            </div>
            <p class="text-slate-300 text-sm">
              Open to new opportunities and exciting projects. Let's discuss how I can help bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <span class="text-2xl font-bold text-primary-300 font-meow">laurencetroyv</span>
            <span class="text-slate-500">|</span>
            <p class="text-slate-400 text-sm">
              © 2024-{{ currentYear }} All rights reserved.
            </p>
          </div>

          <div class="flex items-center gap-4">
            <NuxtLink
              href="mailto:laurencetroyv@gmail.com"
              class="text-slate-400 hover:text-primary-300 transition-colors duration-200"
              aria-label="Email"
            >
              <i class="pi pi-envelope text-lg" />
            </NuxtLink>
            <NuxtLink
              href="https://linkedin.com/in/laurencetroyv"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-400 hover:text-primary-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i class="pi pi-linkedin text-lg" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms"
import z from "zod"
import { zodResolver } from "@primevue/forms/resolvers/zod"

const schema = z.object({
  name: z.string().min(3, { error: "Name is required" }),
  email: z.string().min(3, { error: "Email is required" }),
  subject: z.string().min(3, { error: "Subject is required" }),
  message: z.string().min(3, { error: "Message is required" }),
})

const initialValues = ref({
  name: "",
  email: "",
  subject: "",
})

const resolver = zodResolver(schema)

const isSubmitting = ref(false)

const currentYear = new Date().getFullYear()

async function onSubmit(event: FormSubmitEvent) {
  isSubmitting.value = true

  try {
    const body = {
      name: event.states.name!.value,
      email: event.states.email!.value,
      message: event.states.message!.value,
    }

    const config = useRuntimeConfig()

    await $fetch(config.formSubmit, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        ...body,
        _subject: event.states.subject!.value,
        _template: "table",
        _captcha: "true",
      }),
    })
  }
  catch (error) {
    console.error("Error submitting form:", error)
    alert("Sorry, there was an error sending your message. Please try again or email me directly.")
  }
  finally {
    isSubmitting.value = false
  }
}

const downloadResume = () => {
  window.open("/resume.pdf", "_blank")
}

const viewResume = () => {
  window.open("/resume.pdf", "_blank")
}
</script>
