<script setup lang="ts">

// const query = groq`*[_type == "event"]`;
// const { data: event } = useSanityQuery(query);



</script>

<template>
  <main>
    <!-- <AppHero 
      :title="page?.hero.title"
      :date="page?.hero.date"
      :breadcrumbs="page?.hero.breadcrumbs"
    /> -->
    <article class="article">
      <!-- <ContentRenderer v-if="events" :value="events" tag="section" /> -->
      <!-- <ContentRenderer v-if="page" :value="page" tag="section" /> -->
      <!-- <div v-else>Page not found</div> -->

    </article>
  </main>
</template>

<style lang="scss" scoped>
  .article {
    inline-size: min(90%, 700px);
    margin: 0 auto;
    margin-block-end: 180px;
  }
</style>