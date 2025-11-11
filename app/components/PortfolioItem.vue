<script lang="ts" setup>

const props = defineProps<{
  slug: string;
  title: string;
  excerpt?: string;
}>();

</script>

<template>
  <a class="portfolio-item" :href="`/portfolio/${props.slug}`">
    <img class="portfolio-item__img" src="/images/rectangle.png" alt="" width="294" height="294">
    <h2 class="portfolio-item__title">{{ props.title }}</h2>
    <p class="portfolio-item__description" v-html="props.excerpt"></p>
  </a>
</template>

<style lang="scss" scoped>
.portfolio-item {
  text-decoration: none;
  color: inherit;

  &__img {
    max-inline-size: 294px;
    inline-size: 100%;
    aspect-ratio: 1 / 1;
  }
  &__title {
    text-transform: uppercase;
    font-size: 0.875rem;
  }
  &__description {
    text-transform: uppercase;
    font-size: 0.75rem;
  }
}
</style>