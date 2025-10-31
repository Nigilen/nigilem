<script lang="ts" setup>

const { data: posts } = await useFetch('https://cms.nigilen.site/wp-json/wp/v2/posts?_embed');

console.log(posts)

</script>


<template>
  <section class="blog-grid">
    <ul class="blog-grid__list">
      <li v-for="post in posts" :key="post" class="blog-grid__item">
        <BlogItem 
          :title="post.title.rendered"
          :description="post.excerpt.rendered"
          :image="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url"
          :url="`/blog/${post.slug}`"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.blog-grid {
  max-inline-size: min(967px, 90%);
  margin-inline: auto;
  margin-block-end: 180px;
  
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, min(294px, 100%));
    justify-content: center;
    gap: 40px;
    padding: 0;
    list-style: none;
  }

  &__item {
    text-align: center;
  }
}
</style>