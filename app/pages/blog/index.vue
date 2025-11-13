<script lang="ts" setup>


interface WPPage {
  id: number;
  title: { rendered: string };
};

const { data: page } = await useAsyncData('blog-page', async () => {
  const pages = await $fetch<WPPage[]>(
    'https://cms.nigilen.site/wp-json/wp/v2/pages', 
    { 
      params: { slug: 'blog' }
    }
  );
  if (!pages.length) {
    throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  }
  return pages[0];
});

useSeoMeta({
  title: page?.value?.acf.seo_title,
  description: page?.value?.acf.seo_description,
  ogTitle: page?.value?.acf.seo_title,
  ogDescription: page?.value?.acf.seo_description,
});

</script>

<template>
  <main>
    <AppHero :title="page?.title.rendered"/>
    <BlogGrid />
  </main>
</template>