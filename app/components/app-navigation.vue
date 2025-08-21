<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a
            href="#home"
            class="text-2xl font-bold text-primary-300 hover:text-primary-200 transition-colors duration-200 font-meow"
            @click="scrollToSection('home')"
          >
            laurencetroyv
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <a
              v-for="item in navigationItems"
              :key="item.id"
              :href="`#${item.id}`"
              class="text-slate-300 hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <PrimevueButton
            icon="pi pi-bars"
            class="p-button-text p-button-rounded"
            @click="mobileMenuOpen = true"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Sidebar -->
    <PrimevueSidebar
      v-model:visible="mobileMenuOpen"
      position="left"
      class="p-sidebar-md bg-slate-900 border-slate-800"
    >
      <template #header>
        <div class="flex items-center gap-2">
          <span class="font-bold text-xl text-primary-300">LTV</span>
        </div>
      </template>

      <div class="flex flex-col gap-4 mt-8">
        <a
          v-for="item in navigationItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-slate-300 hover:text-purple-300 px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg hover:bg-slate-800/50"
          @click="handleMobileNavClick(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
    </PrimevueSidebar>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigationItems = [
  { id: "overview", label: "Overview" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

const handleMobileNavClick = (sectionId: string) => {
  scrollToSection(sectionId)
  mobileMenuOpen.value = false
}

// Add scroll effect to navigation
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }

  window.addEventListener("scroll", handleScroll)

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })
})
</script>
