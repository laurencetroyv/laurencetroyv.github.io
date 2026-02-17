<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
        Get to Know Me
      </h2>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        A glimpse into my school to professional journey, skills, and what drives me as a developer
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Bio card — full width on mobile, 2/3 on md+ -->
      <BentoCard
        class="col-span-1 md:col-span-2 md:row-span-2"
        :gradient="true"
      >
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-50 mb-4">
            Hello, I'm Laurence Troy
          </h3>

          <ClientOnly>
            <p class="text-slate-300 leading-relaxed mb-4 text-sm">
              A passionate <span class="text-primary-300 font-medium">Software Engineer</span>,
              <span class="text-blue-400 font-medium">Mobile App Developer</span>, and
              <span class="text-green-400 font-medium">Researcher</span> with
              <span class="text-purple-400 font-medium">{{ yearsExperience() }}+ years of experience</span>
              crafting digital experiences and contributing to scientific knowledge.
            </p>
          </ClientOnly>

          <p class="text-slate-400 text-sm leading-relaxed mb-4 grow">
            I specialize in building scalable web and mobile applications using Vue/Nuxt, React/Next/TanStack Start, Flutter,
            Laravel, and modern development technologies. I thrive on turning complex problems into
            elegant solutions that users love.
          </p>

          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            Beyond work, I love exploring emerging technologies, contributing to open-source projects,
            and learning new technology stack. I believe in continuous learning and staying at the
            forefront of technological innovation.
          </p>

          <div>
            <p class="text-slate-50 font-medium text-sm mb-3">
              Core Technologies
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <p
                v-for="tech in coreTechnologies"
                :key="tech"
                class="px-2 py-1 bg-slate-800/60 text-slate-300 rounded text-xs font-medium text-center"
              >
                {{ tech }}
              </p>
            </div>
          </div>
        </div>
      </BentoCard>

      <!-- Let's Connect -->
      <BentoCard class="col-span-1">
        <div class="h-full flex flex-col">
          <h3 class="text-lg font-bold text-slate-50 mb-4">
            Let's Connect
          </h3>

          <div class="space-y-3 grow">
            <NuxtLink
              href="mailto:laurencetroyv@gmail.com"
              class="flex items-center gap-3 text-slate-300 hover:text-primary-300 transition-colors text-sm border border-primary/50 bg-slate-600/10 p-2 rounded"
            >
              <i class="pi pi-envelope text-xs" />
              <span>laurencetroyv@gmail.com</span>
            </NuxtLink>

            <NuxtLink
              href="https://www.linkedin.com/in/laurencetroyv/"
              target="_blank"
              class="flex items-center gap-3 text-slate-300 hover:text-primary-300 transition-colors text-sm border border-primary/50 bg-slate-600/10 p-2 rounded"
            >
              <i class="pi pi-linkedin text-xs" />
              <span>LinkedIn</span>
            </NuxtLink>
          </div>
        </div>
      </BentoCard>

      <!-- Achievements -->
      <BentoCard class="col-span-1">
        <div class="h-full flex flex-col">
          <h3 class="text-lg font-bold text-slate-50 mb-4">
            Achievements
          </h3>

          <div class="space-y-3 grow">
            <NuxtLink
              href="http://dx.doi.org/10.3991/ijim.v18i04.45063"
              target="_blank"
              class="flex items-center gap-3 border border-primary/50 bg-slate-600/10 p-2 rounded hover:bg-slate-600/20 transition-colors text-slate-300 hover:text-primary-300"
            >
              <i class="pi pi-file text-xs" />
              <span class="text-sm">Published Research Paper</span>
            </NuxtLink>

            <NuxtLink
              href="https://github.com/laurencetroyv"
              target="_blank"
              class="flex items-center gap-3 border border-primary/50 bg-slate-600/10 p-2 rounded text-slate-300 hover:text-primary-300 transition-colors"
            >
              <i class="pi pi-wrench text-xs" />
              <span class="text-sm">Open Source Contributor</span>
            </NuxtLink>
          </div>
        </div>
      </BentoCard>

      <!-- Experience 1 -->
      <BentoCard class="col-span-1">
        <div class="h-full flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center shrink-0">
              <i class="pi pi-code text-white text-xs" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-slate-50 text-sm truncate">
                {{ recentExperience1.title }}
              </h4>
              <p class="text-slate-400 text-xs">
                {{ recentExperience1.company }}
              </p>
            </div>
          </div>

          <p class="text-slate-500 text-xs mb-3">
            {{ recentExperience1.duration }}
          </p>

          <p class="text-slate-400 text-xs leading-relaxed mb-3 grow">
            {{ recentExperience1.description }}
          </p>

          <div class="flex items-center gap-2">
            <i class="pi pi-star text-yellow-500 text-xs" />
            <span class="text-slate-300 text-xs">{{ recentExperience1.badge }}</span>
          </div>
        </div>
      </BentoCard>

      <!-- Experience 2 -->
      <BentoCard class="col-span-1">
        <div class="h-full flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-500 rounded flex items-center justify-center shrink-0">
              <i class="pi pi-briefcase text-white text-xs" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-slate-50 text-sm">
                {{ recentExperience2.title }}
              </h4>
              <p class="text-slate-400 text-xs">
                {{ recentExperience2.company }}
              </p>
            </div>
          </div>

          <p class="text-slate-500 text-xs mb-3">
            {{ recentExperience2.duration }}
          </p>

          <p class="text-slate-400 text-xs leading-relaxed mb-3 grow">
            {{ recentExperience2.description }}
          </p>

          <div class="flex items-center gap-2">
            <i class="pi pi-server text-blue-500 text-xs" />
            <span class="text-slate-300 text-xs">{{ recentExperience2.badge }}</span>
          </div>
        </div>
      </BentoCard>

      <!-- Available for Hire -->
      <BentoCard
        class="col-span-1 cursor-pointer"
        :accent="true"
        @click="scrollToSection('contact')"
      >
        <div class="h-full flex flex-col">
          <h3 class="text-lg font-bold text-slate-50 mb-4">
            Available for Hire
          </h3>

          <div class="space-y-3 grow">
            <div class="flex items-center gap-3 border border-primary/50 bg-slate-600/10 p-2 rounded">
              <i class="pi pi-circle text-xs" />
              <span class="text-slate-300 text-sm">Open to New Opportunities</span>
            </div>

            <div class="flex items-center gap-3 border border-primary/50 bg-slate-600/10 p-2 rounded">
              <i class="pi pi-warehouse text-xs" />
              <span class="text-slate-300 text-sm">Remote</span>
            </div>
          </div>
        </div>
      </BentoCard>
    </div>
  </div>
</template>

<script setup>
const coreTechnologies = [
  "Vue/Nuxt", "React/Next/Tanstack Start", "JavaScript/TypeScript", "Laravel", "Docker", "Figma",
]

const recentExperience1 = {
  title: "Software Engineer",
  company: "EdFolio Inc.",
  duration: "2024 — 2026",
  description: "Developing educational technology solutions, building scalable web applications, and contributing to innovative learning platforms at EdFolio Inc.",
  badge: "Developer",
}

const recentExperience2 = {
  title: "Corporate Admin & IT Specialist",
  company: "360 Degrees MSII",
  duration: "2024 — 2024",
  description: "Managed corporate administrative operations and provided IT specialist services, ensuring smooth business operations and technical infrastructure.",
  badge: "IT Administration",
}
</script>
