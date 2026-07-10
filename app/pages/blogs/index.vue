<script lang="ts" setup>
const { data} = await useAsyncData(() => queryCollection('content').path('/').first())
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Blog Not Found</div>
</template>
