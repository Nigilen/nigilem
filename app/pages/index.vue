<script lang="ts" setup>

useSeoMeta({
  title: "Главная",
  description: 'lol'
});


// const { data: page } = await useAsyncData(() => queryCollection('content').path('/').first());

</script>

<template>
  <main>
    <AppHero title="Я Николай Юськов" subtitle="rontend разработчик"/>
  </main>
</template>
