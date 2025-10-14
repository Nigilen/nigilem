<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/contacts').first())

</script>

<template>
  <main>
    <AppHero :title="page?.hero.title"/>
    

    <AppContactsInfo />
    <AppContactsForm />
  </main>
</template>