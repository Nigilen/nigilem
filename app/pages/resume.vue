<script lang="ts" setup>

const { data: page } = await useAsyncData(() => queryCollection('content').path('/resume').first())

</script>


<template>
  <main>
    <!-- <AppHero title="Резюме" /> -->
    <AppHero :title="page?.hero.title"/>
    <AppAbout />
    <div class="timeline-columns">
      <AppTimeLine />
      <AppTimeLine />
    </div>
    <AppStack />
    <AppStack />
  </main>
</template>

<style lang="scss" scoped>

.timeline-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  max-inline-size: 967px;
  margin-inline: auto;
  margin-block-end: 180px;
}

</style>
