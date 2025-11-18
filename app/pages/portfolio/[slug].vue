<script setup lang="ts">

const route = useRoute().params.slug;

const post = await usePost('posts', String(route));

useSeoMeta({
  title: post?.value?.acf?.seo_title,
  description: post?.value?.acf?.seo_description,
  ogTitle: post?.value?.acf?.seo_title,
  ogDescription: post?.value?.acf?.seo_description,
});

</script>

<template>
  <main>
    <AppHero 
      :title="post?.title.rendered"
    />
    <article class="article">

    <div v-html="post?.content.rendered"></div>

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