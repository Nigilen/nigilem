<script lang="ts" setup>


</script>


<template>
  <section class="portfolio-grid">
    <ul class="portfolio-grid__list">
      <li v-for="i in 10" :key="i" class="portfolio-grid__item">
        <PortfolioItem />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-grid {
  max-inline-size: min(967px, 90%);
  margin-inline: auto;
  margin-block-end: 180px;
  
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(294px, 100%), 1fr));
    gap: 40px;
    padding: 0;
    list-style: none;
  }

  &__item {
    text-align: center;
  }
}
</style>