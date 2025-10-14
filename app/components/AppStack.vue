<script lang="ts" setup>

</script>

<template>
  <section class="stack container">
    <h2 class="stack__title section-title">Мой стек</h2>
    <ul class="stack__list">
      <li class="stack__item">Website hosting</li>
      <li class="stack__item">Create logo design</li>
      <li class="stack__item">Modern and mobile-ready</li>
      <li class="stack__item">Graphics and animations</li>
      <li class="stack__item">iOS and android apps</li>
      <li class="stack__item">Design for print</li>
      <li class="stack__item">Advertising services include</li>
      <li class="stack__item">Search engine marketing</li>
      <li class="stack__item">iOS and android apps</li>
      <li class="stack__item">Design for print</li>
      <li class="stack__item">Advertising services include</li>
      <li class="stack__item">Search engine marketing</li>
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
    font-size: 0.875rem;
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