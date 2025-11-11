<script setup lang="ts">

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
      
    <div v-html="article.content.rendered"></div>

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