<script setup lang="ts">

import { useGraphql } from '~/composables/useWpGraphql';
import type { PostsQueryResponse } from '~/composables/useWpGraphql';

const result = await useGraphql<PostsQueryResponse>(`
  {
    posts {
      nodes {
        title
        content
      }
    }
  }
`);

const posts = result?.posts?.nodes?.map((post) => post.title) || [];
const content = result?.posts?.nodes?.map((post) => post.content) || [];

</script>

<template>
  <main>
    <AppHero 
      :title="posts[0]"
    />
    <article class="article">
      <div v-html="content"></div>
      <!-- <ContentRenderer v-if="posts[0]" :value="posts[0]" tag="section" /> -->
      <!-- <ContentRenderer v-if="page" :value="page" tag="section" /> -->
      <!-- <div v-else>Page not found</div> -->

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