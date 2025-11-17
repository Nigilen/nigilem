<script lang="ts" setup>

interface WPPageAcf {
  seo_title: string;
  seo_description: string;
};

interface WPPage {
  id: number;
  title: { rendered: string };
  acf: WPPageAcf;
};

const route = useRoute().name;
const config = useRuntimeConfig();

const { data: page } = await useAsyncData('blog-page', async (): Promise<WPPage | undefined> => {
  const pages = await $fetch<WPPage[]>(
    `${config.public.API_URL}/wp-json/wp/v2/pages`, 
    { params: { slug: route } }
  );
  if (!pages.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  return pages[0];
});

useSeoMeta({
  title: page?.value?.acf.seo_title,
  description: page?.value?.acf.seo_description,
  ogTitle: page?.value?.acf.seo_title,
  ogDescription: page?.value?.acf.seo_description,
});

const posts = await usePostByCategory(config.public.API_URL);


</script>

<template>
  <main>
    <AppHero :title="page?.title.rendered"/>
    <BlogGrid :posts="posts"/>
  </main>
</template>