<script setup lang="ts">
import '~/assets/scss/main.scss';

useHead({
  titleTemplate: '%s | Nigilen',
  meta: [
    {name: 'color-scheme', content: 'dark light'}
  ]
});

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
