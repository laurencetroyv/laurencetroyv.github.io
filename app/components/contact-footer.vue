<template>
  <div class="bg-slate-900 border-t border-slate-800">
    <!-- Main Contact Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact Form -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Let's Work Together
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <form
            class="space-y-6"
            @submit.prevent="submitForm"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Name *
                </label>
                <PrimevueInputText
                  id="name"
                  v-model="form.name"
                  placeholder="John Doe"
                  class="w-full"
                  :class="{ 'p-invalid': errors.name }"
                  required
                />
                <small
                  v-if="errors.name"
                  class="text-red-400 mt-1 block"
                >{{ errors.name }}</small>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email Address *
                </label>
                <PrimevueInputText
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full"
                  :class="{ 'p-invalid': errors.email }"
                  required
                />
                <small
                  v-if="errors.email"
                  class="text-red-400 mt-1 block"
                >{{ errors.email }}</small>
              </div>
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-slate-300 mb-2"
              >
                Subject
              </label>
              <PrimevueInputText
                id="subject"
                v-model="form.subject"
                placeholder="Project inquiry, collaboration, etc."
                class="w-full"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-slate-300 mb-2"
              >
                Message *
              </label>
              <PrimevueTextarea
                id="message"
                v-model="form.message"
                placeholder="Tell me about your project, timeline, and requirements..."
                rows="6"
                class="w-full resize-none"
                :class="{ 'p-invalid': errors.message }"
                required
              />
              <small
                v-if="errors.message"
                class="text-red-400 mt-1 block"
              >{{ errors.message }}</small>
            </div>

            <PrimevueButton
              type="submit"
              :label="isSubmitting ? 'Sending...' : 'Send Message'"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 font-semibold"
              icon="pi pi-send"
            />
          </form>
        </div>

        <!-- Direct Contact Info -->
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

          <!-- Contact Methods -->
          <div class="space-y-6">
            <a
              href="mailto:laurencetroyv@gmail.com"
              class="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group"
            >
              <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i class="pi pi-linkedin text-white text-xl" />
              </div>
              <div>
                <h4 class="font-semibold text-slate-50">LinkedIn</h4>
                <p class="text-slate-400 text-sm">Connect with me professionally</p>
              </div>
            </a>

            <div class="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
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

          <!-- Resume Download -->
          <div class="pt-6 border-t border-slate-800">
            <h4 class="font-semibold text-slate-50 mb-4">
              Download My Resume
            </h4>
            <div class="flex flex-col sm:flex-row gap-3">
              <PrimevueButton
                label="Download PDF"
                icon="pi pi-download"
                class="p-button-outlined border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                @click="downloadResume"
              />
              <PrimevueButton
                label="View Online"
                icon="pi pi-external-link"
                class="p-button-text text-slate-400 hover:text-purple-400"
                @click="viewResume"
              />
            </div>
          </div>

          <!-- Availability Status -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
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

    <!-- Footer Bottom -->
    <div class="border-t border-slate-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <span class="text-2xl font-bold text-purple-300">LTV</span>
            <span class="text-slate-500">|</span>
            <p class="text-slate-400 text-sm">
              © {{ currentYear }} Laurence Troy V. All rights reserved.
            </p>
          </div>

          <div class="flex items-center gap-4">
            <a
              href="mailto:laurencetroyv@gmail.com"
              class="text-slate-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Email"
            >
              <i class="pi pi-envelope text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/laurencetroyv"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i class="pi pi-linkedin text-lg" />
            </a>
            <PrimevueButton
              icon="pi pi-angle-up"
              class="p-button-rounded p-button-text p-button-sm text-slate-400 hover:text-purple-400"
              aria-label="Back to top"
              @click="scrollToTop"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const errors = reactive({
  name: "",
  email: "",
  message: "",
})

const isSubmitting = ref(false)

const currentYear = new Date().getFullYear()

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = "")

  let isValid = true

  if (!form.name.trim()) {
    errors.name = "Name is required"
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = "Email is required"
    isValid = false
  }
  else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Please enter a valid email"
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = "Message is required"
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Replace with actual form submission logic
    // This could be a Netlify form, API endpoint, or email service
    console.log("Form submitted:", form)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message (you might want to use a toast notification)
    alert("Message sent successfully! I'll get back to you soon.")

    // Reset form
    Object.keys(form).forEach(key => form[key] = "")
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<style scoped>
@reference "tailwindcss";

/* Custom form styling */
:deep(.p-inputtext) {
  @apply bg-slate-800/50 border-slate-700 text-slate-50 placeholder-slate-400;
}

:deep(.p-inputtext:focus) {
  @apply border-purple-400 shadow-lg shadow-purple-400/20;
}

:deep(.p-textarea) {
  @apply bg-slate-800/50 border-slate-700 text-slate-50 placeholder-slate-400;
}

:deep(.p-textarea:focus) {
  @apply border-purple-400 shadow-lg shadow-purple-400/20;
}

:deep(.p-invalid) {
  @apply border-red-400;
}
</style>
