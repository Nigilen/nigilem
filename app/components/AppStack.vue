<script lang="ts" setup>

interface ListItem {
  id: number;
  text: string;
};


const props = defineProps<{
  title: string;
  list: ListItem[];
}>();

</script>

<template>
  <section class="stack container">
    <h2 class="stack__title section-title">{{ props.title }}</h2>
    <ul class="stack__list">
      <li v-for="item in props.list" :key="item.text" class="stack__item">{{ item.text }}</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

.stack {
  max-inline-size: 967px;
  margin-inline: auto;
  margin-block-end: 180px;

  &__list {
    column-count: auto;
    column-width: min(200px, 60vw);
    column-gap: 120px;

    padding-left: 1.1rem;
  }

  &__item {
    list-style-image: url('~/assets/my-icons/check.svg');
    padding-left: 0.5rem;


    &:not(:last-child) {
      margin-block-end: 0.875rem;
    }
  }

}

</style>