<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/').first())

</script>

<template>
  <main>
    <AppHero :title="page?.hero.title" :subtitle="page?.hero.subtitle"/>
    <!-- <AppHero title="Я Николай Юськов" subtitle="frontend разработчик"/> -->
  </main>
</template>
