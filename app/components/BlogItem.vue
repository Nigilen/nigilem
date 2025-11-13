<script lang="ts" setup>

const props = defineProps<{
  url?: string;
  title?: string;
  image?: string;
  date?: string;
  description?: string;
}>();

</script>

<template>
  <NuxtLink :to="props.url" class="blog-item">
    <NuxtPicture
      :img-attrs="{
        class: 'blog-item__img',
      }"
      :src="props.image" 
      :alt="props.title" 
      width="294" 
      height="294"
      format="[avif, webp]"
      densities="x1 x2"
      loading="lazy"
    />


    <div class="blog-item__text">
      <time class="blog-item__date" :datetime="props.date">{{ props.date }}</time>
      <h2 class="blog-item__title">{{ props.title }}</h2>
      <p class="blog-item__description" v-html="props.description"></p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.blog-item {
  text-decoration: none;
  color: inherit;

  :deep(.blog-item__img) {
    max-inline-size: 294px;
    inline-size: 100%;
    aspect-ratio: 1 / 1;
    margin-block-end: 15px;
  }
  
  &__text {
    max-inline-size: 80%;
    margin-inline: auto;
  }
  
  &__date {
    display: block;
    color: #E17346;
    border: 1px solid #E17346;
    padding: 4px 6px;
    font-size: 0.875rem;
    margin: 0 auto 11px;
    inline-size: max-content;
  }
  
  &__title {
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-block: 0 2px;
  }
  &__description {
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-block: 0;
  }
}
</style>