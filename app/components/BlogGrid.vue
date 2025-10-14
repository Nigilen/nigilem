<script lang="ts" setup>


</script>


<template>
  <section class="blog-grid">
    <ul class="blog-grid__list">
      <li v-for="i in 10" :key="i" class="blog-grid__item">
        <BlogItem />
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