<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <app-navigation />
    <slot />
    <ContactFooter />
    <PrimevueScrollTop />
    <PrimevueToast position="top-right" />
  </div>
</template>
