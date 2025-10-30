<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/blog').first())

const { data: posts } = await useFetch('https://cms.nigilen.site/wp-json/wp/v2/posts')

</script>

<template>
  <main>
    <AppHero :title="page?.hero.title"/>
    
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title.rendered }}</h2>
      <NuxtLink :to="`/blog/${post.slug}`">Read more</NuxtLink>
      <div v-html="post.excerpt.rendered"></div>
    </div>

    <BlogGrid />
  </main>
</template>