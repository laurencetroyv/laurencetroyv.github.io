<!-- app/components/OverviewSection.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
        Get to Know Me
      </h2>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        A glimpse into my professional journey, skills, and what drives me as a developer
      </p>
    </div>

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
      <!-- Card 1: About Me (Large - 2x2) -->
      <bento-card
        class="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
        :gradient="true"
      >
        <div class="h-full flex flex-col">
          <div class="flex items-start gap-6 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/12975712?v=4"
              alt="Laurence Troy V"
              class="w-20 h-20 rounded-2xl object-cover ring-2 ring-purple-400/30"
            >
            <div>
              <h3 class="text-2xl font-bold text-slate-50 mb-2">
                About Me
              </h3>
              <span class="text-purple-300 font-medium">Full Stack Developer</span>
            </div>
          </div>

          <p class="text-slate-300 leading-relaxed mb-6 flex-grow">
            I'm a passionate developer who loves creating digital experiences that make a difference.
            With expertise spanning web, mobile, and cloud technologies, I focus on building scalable,
            user-centric solutions that solve real-world problems.
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in coreTechnologies"
              :key="tech"
              class="px-3 py-1 bg-slate-800/60 text-slate-300 rounded-full text-sm font-medium"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </bento-card>

      <!-- Card 2: Let's Connect -->
      <bento-card class="md:col-span-1 md:row-span-1">
        <div class="text-center h-full flex flex-col justify-between">
          <div>
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i class="pi pi-send text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-50 mb-2">
              Let's Connect
            </h3>
            <p class="text-slate-400 text-sm mb-4">
              Ready to collaborate
            </p>
          </div>

          <div class="space-y-2">
            <a
              href="mailto:laurencetroyv@gmail.com"
              class="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors text-sm"
            >
              <i class="pi pi-envelope" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/laurencetroyv"
              target="_blank"
              class="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors text-sm"
            >
              <i class="pi pi-linkedin" />
              <span>LinkedIn</span>
            </a>
            <p class="text-slate-500 text-xs flex items-center gap-1">
              <i class="pi pi-map-marker" />
              Cagayan de Oro, PH
            </p>
          </div>
        </div>
      </bento-card>

      <!-- Card 3: Achievements -->
      <bento-card class="md:col-span-1 md:row-span-1">
        <div class="text-center h-full">
          <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-chart-line text-2xl text-white" />
          </div>
          <h3 class="text-xl font-bold text-slate-50 mb-4">
            Achievements
          </h3>

          <div class="grid grid-cols-2 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold text-purple-400">
                {{ yearsExperience }}+
              </div>
              <div class="text-slate-400 text-xs">
                Years
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-400">
                {{ projectsCompleted }}+
              </div>
              <div class="text-slate-400 text-xs">
                Projects
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-400">
                {{ technologiesMastered }}+
              </div>
              <div class="text-slate-400 text-xs">
                Technologies
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-400">
                98%
              </div>
              <div class="text-slate-400 text-xs">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </bento-card>

      <!-- Card 4: Recent Experience #1 -->
      <bento-card class="md:col-span-1 md:row-span-1">
        <div class="h-full flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
              <i class="pi pi-briefcase text-purple-400" />
            </div>
            <div class="flex-1">
              <h4 class="font-semibold text-slate-50 text-sm">
                {{ recentExperience1.title }}
              </h4>
              <p class="text-slate-400 text-xs">
                {{ recentExperience1.company }}
              </p>
            </div>
          </div>

          <p class="text-slate-500 text-xs mb-2">
            {{ recentExperience1.duration }}
          </p>
          <div class="mt-auto">
            <span class="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
              {{ recentExperience1.keyTech }}
            </span>
          </div>
        </div>
      </bento-card>

      <!-- Card 5: Recent Experience #2 -->
      <bento-card class="md:col-span-1 md:row-span-1">
        <div class="h-full flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
              <i class="pi pi-code text-blue-400" />
            </div>
            <div class="flex-1">
              <h4 class="font-semibold text-slate-50 text-sm">
                {{ recentExperience2.title }}
              </h4>
              <p class="text-slate-400 text-xs">
                {{ recentExperience2.company }}
              </p>
            </div>
          </div>

          <p class="text-slate-500 text-xs mb-2">
            {{ recentExperience2.duration }}
          </p>
          <div class="mt-auto">
            <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
              {{ recentExperience2.keyTech }}
            </span>
          </div>
        </div>
      </bento-card>

      <!-- Card 6: Available for Hire -->
      <bento-card
        class="md:col-span-1 md:row-span-1 lg:row-span-2"
        :accent="true"
      >
        <div class="text-center h-full flex flex-col justify-between">
          <div>
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i class="pi pi-check-circle text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-50 mb-2">
              Available for Hire
            </h3>

            <div class="mb-4">
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </div>
          </div>

          <div class="space-y-2 text-sm text-slate-300">
            <p>Interested in:</p>
            <div class="space-y-1 text-xs text-slate-400">
              <p>• Full-stack web development</p>
              <p>• Mobile app projects</p>
              <p>• Cloud architecture</p>
              <p>• Technical consulting</p>
            </div>

            <PrimevueButton
              label="Get in Touch"
              size="small"
              class="p-button-sm w-full mt-4"
              @click="scrollToSection('contact')"
            />
          </div>
        </div>
      </bento-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data for the cards
const coreTechnologies = ["Vue.js", "React", "Flutter", "Laravel", "TypeScript", "AWS"]

const yearsExperience = computed(() => {
  return new Date().getFullYear() - 2019 // Adjust start year
})

const projectsCompleted = ref(50)
const technologiesMastered = ref(20)

// Update these with your actual experience
const recentExperience1 = {
  title: "Senior Full Stack Developer",
  company: "Tech Company", // Replace with actual company
  duration: "2023 - Present",
  keyTech: "Vue.js + Laravel",
}

const recentExperience2 = {
  title: "Mobile App Developer",
  company: "Startup Inc", // Replace with actual company
  duration: "2022 - 2023",
  keyTech: "Flutter + Firebase",
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
</script>
