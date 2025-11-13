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

</script>

<template>
  <main>
    <AppHero :title="page?.title.rendered"/>
    <BlogGrid />
  </main>
</template>