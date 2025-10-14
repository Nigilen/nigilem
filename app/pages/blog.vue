<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/blog').first())

</script>

<template>
  <main>
    <AppHero :title="page?.hero.title"/>

    <BlogGrid />
  </main>
</template>