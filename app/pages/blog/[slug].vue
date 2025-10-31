<script setup lang="ts">

// import { useGraphql } from '~/composables/useWpGraphql';
// import type { PostsQueryResponse } from '~/composables/useWpGraphql';

// const result = await useGraphql<PostsQueryResponse>(`
//   {
//     posts {
//       nodes {
//         slug
//         title
//         content
//       }
//     }
//   }
// `);

// const posts = result?.posts?.nodes?.map((post) => post.title) || [];
// const content = result?.posts?.nodes?.map((post) => post.content) || [];
// const slug = result?.posts?.nodes?.map((post) => post.slug) || [];


const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useFetch(`https://cms.nigilen.site/wp-json/wp/v2/posts?slug=${slug}`);

const article = post.value?.[0];


</script>

<template>
  <main>
    <AppHero 
      :title="article.title.rendered"
    />
    <article class="article">
      <div v-html="article.content.rendered" />
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