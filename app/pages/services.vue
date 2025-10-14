<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/services').first())

</script>


<template>
  <main>
    <!-- <AppHero title="Услуги" /> -->
    <AppHero :title="page?.hero.title"/>
  </main>
</template>