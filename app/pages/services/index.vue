<script lang="ts" setup>
const route = useRoute().name;
const config = useRuntimeConfig();

const page = await usePost('pages', String(route));

useSeoMeta({
  title: page?.value?.acf?.seo_title,
  description: page?.value?.acf?.seo_description,
  ogTitle: page?.value?.acf?.seo_title,
  ogDescription: page?.value?.acf?.seo_description,
});

const servicesList = await usePostByCategory(config.public.API_URL, 4);

</script>

<template>
  <main>
    <AppHero :title="page?.title"/>
    <ServicesGrid :posts="servicesList"/>
  </main>
</template>

