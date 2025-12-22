<script setup lang="ts">

const route = useRoute().params.slug;

const post = await usePost('posts', String(route));

useSeoMeta({
  title: post?.value?.acf?.seo_title || '',
  description: post?.value?.acf?.seo_description || '',
  ogTitle: post?.value?.acf?.seo_title || '',
  ogDescription: post?.value?.acf?.seo_description || '',
});

</script>

<template>
  <main>
    <AppHero 
      :title="post?.title || ''"
    />
    <article class="article">
      <div v-html="post?.content || ''" />
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
    color: var(--accent-color);
    text-decoration-color: transparent;
    transition: all 0.1s ease-in-out;
    text-underline-offset: 0.4em;
  }
  .article :deep(a:hover) {
    text-decoration-color: var(--accent-color);
    text-underline-offset: 0.3em;
  }

  .article :deep(h2) {
    color: var(--primary-color)000;
  }

  .article :deep(p) {

    line-height: 1.7;
    margin-block-end: 2rem;
  }

  .article :deep(ul) {
    margin-block-end: 2em;
    padding-inline-start: 0;
  }

  .article :deep(li) {

    line-height: 1.7;
    padding-inline-start: 0.5em;
    margin-inline-start: 1em;
  }
  
  .article :deep(li::marker) {
    color: tomato;
  }

</style>