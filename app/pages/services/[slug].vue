<script setup lang="ts">

interface WPPageAcf {
  seo_title: string;
  seo_description: string;
};

interface WPPage {
  title: { rendered: string };
  content: { rendered: string };
  acf: WPPageAcf;
};

const route = useRoute().params.slug;
const config = useRuntimeConfig();

const { data: services } = await useAsyncData('services-item', async (): Promise<WPPage | undefined> => {
  const dataArr = await $fetch<WPPage[]>(`${config.public.API_URL}/wp-json/wp/v2/posts`, {
    params: { slug: route }
  });
  if (!dataArr.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  return dataArr[0];
});

useSeoMeta({
  title: services?.value?.acf.seo_title,
  description: services?.value?.acf.seo_description,
  ogTitle: services?.value?.acf.seo_title,
  ogDescription: services?.value?.acf.seo_description,
});

</script>

<template>
  <main>
    <AppHero 
      :title="services?.title.rendered"
    />
    <article class="article">
      
    <div v-html="services?.content.rendered"></div>

    </article>
  </main>
</template>

<style lang="scss" scoped>
  .article {
    inline-size: min(90%, 700px);
    margin: 0 auto;
    margin-block-end: 180px;
  }
</style>