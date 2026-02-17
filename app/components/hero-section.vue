<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-primary-900/20" />

    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <div class="relative inline-block">
            <NuxtImg
              src="https://github.com/laurencetroyv.png"
              alt="Laurence Troy V"
              class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-primary-400/20"
              loading="lazy"
            />
            <div class="absolute inset-0 rounded-full bg-linear-to-tr from-primary-300/20 to-primary-400/20" />
          </div>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6">
          Hi, I'm
          <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-300 to-primary-400">
            Laurence Troy
          </span>
        </h1>

        <div class="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center">
          <span class="font-medium font-montserrat">
            {{ displayedText }}
            <span class="animate-pulse">|</span>
          </span>
        </div>

        <p class="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating exceptional digital experiences through modern web and mobile technologies.
          Based in Cagayan de Oro, Philippines, with {{ yearsOfExperience }}+ years of experience building scalable solutions.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimevueButton
            label="View Portfolio"
            size="large"
            class="bg-linear-to-r from-primary-300 to-primary-400 hover:from-primary-500 hover:to-primary-600 border-0 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            @click="scrollToSection('portfolio')"
          />

          <PrimevueButton
            label="Download Resume"
            icon="pi pi-download"
            size="large"
            variant="outlined"
            class="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300"
            @click="downloadResume"
          />
        </div>

        <div class="mt-10">
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </div>

        <div class="absolute -bottom-24 left-1/2 transform -translate-x-1/2">
          <div
            class="flex flex-col items-center text-slate-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            @click="scrollToSection('overview')"
          >
            <span class="text-sm mb-2 font-medium">Explore</span>
            <div class="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div class="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const displayedText = ref("")
const currentIndex = ref(0)
const currentTextIndex = ref(0)
const isDeleting = ref(false)

const texts = [
  "Nuxt Developer",
  "React Developer",
  "Flutter Developer",
]

const yearsOfExperience = computed(() => {
  const startYear = 2023
  return new Date().getFullYear() - startYear
})

function typeWriter() {
  const currentText = texts[currentTextIndex.value]!

  if (isDeleting.value) {
    displayedText.value = currentText.substring(0, currentIndex.value - 1)
    currentIndex.value--

    if (currentIndex.value === 0) {
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
      setTimeout(typeWriter, 500)
    }
    else {
      setTimeout(typeWriter, 50)
    }
  }
  else {
    displayedText.value = currentText.substring(0, currentIndex.value + 1)
    currentIndex.value++

    if (currentIndex.value === currentText.length) {
      setTimeout(() => {
        isDeleting.value = true
        typeWriter()
      }, 2000)
    }
    else {
      setTimeout(typeWriter, 100)
    }
  }
}

onMounted(() => {
  setTimeout(typeWriter, 1000)
})
</script>

<style scoped>
:deep(.p-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
