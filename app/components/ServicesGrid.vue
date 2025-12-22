<script lang="ts" setup>
import type { Post } from '~/types';

const props = defineProps<{
  posts: Post[]
}>();

</script>

<template>
  <section class="services-grid">
    <ul class="services-grid__list">
      <li v-for="post in props.posts" :key="post.id" class="services-grid__item">
        <ServicesItem 
          :title="post.title"
          :slug="post.slug"
          :image="post.featuredImageUrl || ''"
          :description="post?.acf?.short_description"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.services-grid {
  max-inline-size: min(967px, 90%);
  margin-inline: auto;
  margin-block-end: 180px;
  
  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0;
    list-style: none;
  }

  &__item {
    text-align: center;
  }

  @media (width < 768px) {
    inline-size: max-content;
    
  }
}
</style>