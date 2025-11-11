<script lang="ts" setup>

const { data: post } = await useFetch(`https://cms.nigilen.site/wp-json/wp/v2/pages?slug=blog`);

const article = post.value?.[0];


</script>

<template>
  <main>
    <AppHero :title="article?.title.rendered"/>
    <BlogGrid />
  </main>
</template>