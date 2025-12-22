<script lang="ts" setup>

const props = defineProps<{
  slug: string;
  title: string;
  image: string;
  description?: string;
}>();

</script>

<template>
  <a class="service-item" :href="`/services/${props.slug}`">
    <NuxtPicture
      :img-attrs="{
        class: 'service-item__img',
      }"
      :src="props.image" 
      :alt="props.title" 
      width="294" 
      height="294"
      format="[avif, webp]"
      densities="x1 x2"
      loading="lazy"
    />
    <div class="service-item__text">
      <h2 class="service-item__title">{{ props.title }}</h2>
      <p class="service-item__description">
        {{ props.description }}
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.service-item {
  display: flex;
  column-gap: 20px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #8d8d8d;
  text-align: start;

  
  :deep(.service-item__img) {
    display: grid;
    border: 1px solid #8d8d8d;
    max-inline-size: 194px;
    inline-size: 100%;
    margin: 0;
  }
  &__text {
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    text-transform: uppercase;
    margin: 0;
  }
  &__description {
    text-transform: uppercase;
    margin: 0;
  }

  @media (width < 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    inline-size: auto;
  }
}
</style>