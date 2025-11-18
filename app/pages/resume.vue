<script lang="ts" setup>

const route = useRoute().name;
const config = useRuntimeConfig();

const page = await usePage(config, route);

useSeoMeta({
  title: page?.value?.acf.seo_title,
  description: page?.value?.acf.seo_description,
  ogTitle: page?.value?.acf.seo_title,
  ogDescription: page?.value?.acf.seo_description,
});

const { title: expDevTitle, clearSelectedItems: expDevItems } = await usePageListSection(
  49, 
  config.public.API_URL, 
  'expdev',
);

const { title: expItTitle, clearSelectedItems: expItItems } = await usePageListSection(
  49, 
  config.public.API_URL, 
  'expit',
);

const { title: stackTitle, clearSelectedItems: stackItems } = await usePageListSection(
  49, 
  config.public.API_URL, 
  'techstack',
);

</script>

<template>
  <main>
    <AppHero :title="page?.title.rendered"/>
    <AppAbout 
      :title="page?.acf.title"
      :description="page?.acf.description"
      :image="page?.acf.image"
      :btn-text="page?.acf.download_button"
    />
    <div class="timeline-columns">
      <AppTimeLine 
        :title="expDevTitle"
        :list="expDevItems"
      />
      <AppTimeLine 
        :title="expItTitle"
        :list="expItItems"
      />
    </div>
    <AppStack :list="stackItems" :title="stackTitle" />
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
