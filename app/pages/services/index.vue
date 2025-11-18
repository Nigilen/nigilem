<script lang="ts" setup>
const route = useRoute().name;
const config = useRuntimeConfig();

const page = await usePage(config, route);

useSeoMeta({
  title: page?.value?.acf.seo_title,
  description: page?.value?.acf.seo_description,
  ogTitle: page?.value?.acf.seo_title,
  ogDescription: page?.value?.acf.seo_description,
});

const portfolioList = await usePostByCategory(config.public.API_URL, 4);

</script>

<template>
  <main>
    <AppHero :title="page?.title.rendered"/>

    <ul>
      <li v-for="item in portfolioList" :key="item.id">
        <a :href="`/services/${item.slug}`">{{ item.title }}</a>
      </li>
    </ul>
  </main>
</template>