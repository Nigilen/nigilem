<script lang="ts" setup>

const route = useRoute().name;
const config = useRuntimeConfig();

const page = await usePost('pages', String(route));

useSeoMeta({
  title: page?.value?.acf.seo_title || '',
  description: page?.value?.acf.seo_description || '',
  ogTitle: page?.value?.acf.seo_title || '',
  ogDescription: page?.value?.acf.seo_description || '',
});

const posts = await usePostByCategory(config.public.API_URL);

</script>

<template>
  <main>
    <AppHero :title="page?.title.rendered"/>
    <BlogGrid :posts="posts"/>
  </main>
</template>