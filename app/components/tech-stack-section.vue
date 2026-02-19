<template>
  <section-container
    title="Tech Stack & Tools"
    subtitle="Technologies I use to bring ideas to life"
    :accent="true"
  >
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-slate-50 flex items-center gap-3">
          <span class="w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <i class="pi pi-desktop text-white text-sm" />
          </span>
          Frontend
        </h3>

        <div class="grid grid-cols-2 gap-4">
          <TechBadge
            v-for="tech in frontendTech"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
            :color="tech.color"
          />
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold text-slate-50 flex items-center gap-3">
          <span class="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <i class="pi pi-server text-white text-sm" />
          </span>
          Backend
        </h3>

        <div class="grid grid-cols-2 gap-4">
          <TechBadge
            v-for="tech in backendTech"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
            :color="tech.color"
          />
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold text-slate-50 flex items-center gap-3">
          <span class="w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <i class="pi pi-mobile text-white text-sm" />
          </span>
          Mobile & Others
        </h3>

        <div class="grid grid-cols-2 gap-4">
          <TechBadge
            v-for="tech in mobileTech"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
            :color="tech.color"
          />
        </div>
      </div>
    </div>

    <div class="mb-12">
      <h3 class="text-xl font-bold text-slate-50 flex items-center gap-3 mb-6">
        <span class="w-8 h-8 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <i class="pi pi-cloud text-white text-sm" />
        </span>
        Cloud & DevOps
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <TechBadge
          v-for="tech in cloudTech"
          :key="tech.name"
          :name="tech.name"
          :icon="tech.icon"
          :color="tech.color"
        />
      </div>
    </div>

    <div class="mb-12">
      <h3 class="text-xl font-bold text-slate-50 flex items-center gap-3 mb-6">
        <span class="w-8 h-8 bg-linear-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
          <i class="pi pi-wrench text-white text-sm" />
        </span>
        Tools & Design
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <TechBadge
          v-for="tech in toolsTech"
          :key="tech.name"
          :name="tech.name"
          :icon="tech.icon"
          :color="tech.color"
        />
      </div>
    </div>

    <div class="bg-linear-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <ClientOnly>
            <div class="text-3xl font-bold text-purple-400 mb-2">
              {{ yearsExperience() }}+
            </div>
          </ClientOnly>
          <div class="text-slate-400">
            Years of Experience
          </div>
        </div>
        <div>
          <div class="text-3xl font-bold text-blue-400 mb-2">
            {{ totalTechnologies }}+
          </div>
          <div class="text-slate-400">
            Technologies Mastered
          </div>
        </div>
        <div>
          <div class="text-3xl font-bold text-green-400 mb-2">
            {{ totalProjects }}+
          </div>
          <div class="text-slate-400">
            Projects Completed
          </div>
        </div>
      </div>
    </div>
  </section-container>
</template>

<script setup>
const frontendTech = [
  { name: "Vue", icon: "devicon:vuejs", color: "from-green-400 to-green-600" },
  { name: "Nuxt", icon: "devicon:nuxt", color: "from-green-500 to-emerald-600" },
  { name: "React", icon: "devicon:react", color: "from-blue-400 to-blue-600" },
  { name: "Next", icon: "devicon:nextjs", color: "from-slate-700 to-slate-900" },
  { name: "TypeScript", icon: "devicon:typescript", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", icon: "devicon:javascript", color: "from-yellow-400 to-yellow-600" },
]

const backendTech = [
  { name: "Laravel", icon: "devicon:laravel", color: "from-red-500 to-red-700" },
  { name: "PHP", icon: "devicon:php", color: "from-purple-500 to-purple-700" },
  { name: "MySQL", icon: "devicon:mysql", color: "from-blue-600 to-blue-800" },
  { name: "PostgreSQL", icon: "devicon:postgresql", color: "from-blue-700 to-slate-700" },
]

const mobileTech = [
  { name: "Dart/Flutter", icon: "devicon:flutter", color: "from-blue-400 to-cyan-400" },
  { name: "Expo/React Native", icon: "devicon:react", color: "from-blue-500 to-purple-500" },
]

const cloudTech = [
  { name: "AWS", icon: "devicon:amazonwebservices", color: "from-orange-400 to-orange-600" },
  { name: "DigitalOcean", icon: "devicon:digitalocean", color: "from-blue-500 to-blue-700" },
  { name: "Firebase", icon: "devicon:firebase", color: "from-yellow-500 to-orange-500" },
  { name: "Vercel", icon: "devicon:vercel", color: "from-slate-700 to-slate-900" },
  { name: "Docker", icon: "devicon:docker", color: "from-blue-500 to-cyan-500" },
]

const toolsTech = [
  { name: "Git", icon: "devicon:git", color: "from-orange-500 to-red-500" },
  { name: "VS Code", icon: "devicon:vscode", color: "from-blue-500 to-blue-700" },
  { name: "Figma", icon: "devicon:figma", color: "from-purple-500 to-pink-500" },
  { name: "Postman", icon: "devicon:postman", color: "from-orange-500 to-orange-700" },
  { name: "Jetbrains IDE", icon: "devicon:jetbrains", color: "from-slate-500 to-slate-700" },
]

const totalTechnologies = computed(() => {
  return frontendTech.length + backendTech.length + mobileTech.length + cloudTech.length + toolsTech.length
})

const totalProjects = ref(10)
</script>
