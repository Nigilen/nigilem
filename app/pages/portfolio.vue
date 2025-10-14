<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/portfolio').first())

</script>


<template>
  <main>
    <AppHero :title="page?.hero.title"/>

    <!-- <AppHero title="Портфолио" /> -->
    <PortfolioGrid />
  </main>
</template>