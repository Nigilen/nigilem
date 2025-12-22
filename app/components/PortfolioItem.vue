<script lang="ts" setup>

const props = defineProps<{
  slug: string;
  title: string;
  excerpt?: string;
  image: string;
}>();

</script>

<template>
  <a class="portfolio-item" :href="`/portfolio/${props.slug}`">
    <NuxtPicture
      :img-attrs="{
        class: 'portfolio-item__img',
      }"
      :src="props.image" 
      :alt="props.title" 
      width="294" 
      height="294"
      format="[avif, webp]"
      densities="x1 x2"
      loading="lazy"
    />
    <h2 class="portfolio-item__title">{{ props.title }}</h2>
    <p class="portfolio-item__description" v-html="props.excerpt"></p>
  </a>
</template>

<style lang="scss" scoped>
.portfolio-item {
  text-decoration: none;
  color: inherit;

  :deep(.portfolio-item__img) {
    max-inline-size: 294px;
    inline-size: 100%;
    aspect-ratio: 1 / 1;
  }
  &__title {
    text-transform: uppercase;

    max-inline-size: 90%;
    margin-inline: auto;
  }
  &__description {
    text-transform: uppercase;
    max-inline-size: 90%;
    margin-inline: auto;
  }
}
</style>