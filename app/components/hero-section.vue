<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-900/20" />

    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Profile Image -->
        <div class="mb-8">
          <div class="relative inline-block">
            <img
              src="https://avatars.githubusercontent.com/u/12975712?v=4"
              alt="Laurence Troy V"
              class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-primary-400/20"
              loading="eager"
            >
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/20 to-blue-400/20" />
          </div>
        </div>

        <!-- Name and Title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6">
          Hi, I'm
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
            Laurence Troy
          </span>
        </h1>

        <!-- Typewriter Effect -->
        <div class="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center">
          <span class="font-medium">
            {{ displayedText }}
            <span class="animate-pulse">|</span>
          </span>
        </div>

        <!-- Description -->
        <p class="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating exceptional digital experiences through modern web and mobile technologies.
          Based in Cagayan de Oro, Philippines, with {{ yearsOfExperience }}+ years of experience building scalable solutions.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimevueButton
            label="View Portfolio"
            class="p-button-lg bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 border-0 px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            @click="scrollToSection('portfolio')"
          />

          <PrimevueButton
            label="Download Resume"
            icon="pi pi-download"
            class="p-button-outlined p-button-lg border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300"
            @click="downloadResume"
          />
        </div>

        <!-- Available for hire badge -->
        <div class="mt-10">
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
  "Full Stack Developer",
  "Mobile App Developer",
  "Cloud Engineer",
  "Vue.js Specialist",
  "Laravel Expert",
]

const yearsOfExperience = computed(() => {
  const startYear = 2019 // Adjust based on when you started
  return new Date().getFullYear() - startYear
})

const typeWriter = () => {
  const currentText = texts[currentTextIndex.value]

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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

const downloadResume = () => {
  // Replace with actual resume PDF path
  window.open("/resume.pdf", "_blank")
}

onMounted(() => {
  // Start typewriter effect
  setTimeout(typeWriter, 1000)
})
</script>

<style scoped>
/* Additional animations and effects */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Button hover effects */
:deep(.p-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
