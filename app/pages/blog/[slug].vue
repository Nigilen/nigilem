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

const route = useRoute();

const slug = route.params.slug;

const { data: blogPost } = await useAsyncData('blog-post', async (): Promise<WPPage | undefined> => {
  const dataArr = await $fetch<WPPage[]>('https://cms.nigilen.site/wp-json/wp/v2/posts', {
    params: { slug: slug }
  });
  if (!dataArr.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });

  return dataArr[0];
});

useSeoMeta({
  title: blogPost?.value?.acf.seo_title || '',
  description: blogPost?.value?.acf.seo_description || '',
  ogTitle: blogPost?.value?.acf.seo_title || '',
  ogDescription: blogPost?.value?.acf.seo_description || '',
});

</script>

<template>
  <main>
    <AppHero 
      :title="blogPost?.title.rendered || ''"
    />
    <article class="article">
      <div v-html="blogPost?.content.rendered || ''" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
  .article {
    inline-size: min(90%, 700px);
    margin: 0 auto;
    margin-block-end: 180px;
  }

  .article :deep(a) {
    color: #E17346;
    text-decoration-color: transparent;
    transition: all 0.1s ease-in-out;
    text-underline-offset: 0.4em;
  }
  .article :deep(a:hover) {
    text-decoration-color: #E17346;
    text-underline-offset: 0.3em;
  }

  .article :deep(h2) {
    color: #000000;
  }

  .article :deep(p) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin-block-end: 2rem;
  }

  .article :deep(ul) {
    margin-block-end: 2em;
    padding-inline-start: 0;
  }

  .article :deep(li) {
    font-size: 0.875rem;
    line-height: 1.7;
    padding-inline-start: 0.5em;
    margin-inline-start: 1em;
  }
  
  .article :deep(li::marker) {
    color: tomato;
  }

</style>