<script lang="ts" setup>

interface Post {
  id: number;
  dateOnly: string | undefined;
  slug: string;
  title: string;
  excerpt: string;
  featuredImageUrl: string | null;
};

const props = defineProps<{
  posts: Post[] | undefined;
}>();

</script>


<template>
  <section class="blog-grid">
    <ul class="blog-grid__list">
      <li v-for="post in props.posts" :key="post.id" class="blog-grid__item">
        <BlogItem 
          :title="post.title"
          :description="post.excerpt"
          :image="post.featuredImageUrl || ''"
          :url="`/blog/${post.slug}`"
          :date="post.dateOnly"
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