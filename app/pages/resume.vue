<script lang="ts" setup>

interface ResumePageAcf {
  title: string;
  description: string;
  image: string;
  download_button: string;
  seo_title: string;
  seo_description: string;
};

interface WPPage {
  id: number;
  title: { rendered: string };
  acf: ResumePageAcf;
};

const route = useRoute().name;

const config = useRuntimeConfig();

const { data: page } = await useAsyncData('page-resume', async (): Promise<WPPage | undefined> => {
  const pages = await $fetch<WPPage[]>(
    `${config.public.API_URL}/wp-json/wp/v2/pages`, 
    { params: { slug: route }}
  );
  if (!pages.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  return pages[0];
});

useSeoMeta({
  title: page?.value?.acf.seo_title,
  description: page?.value?.acf.seo_description,
  ogTitle: page?.value?.acf.seo_title,
  ogDescription: page?.value?.acf.seo_description,
});

const { firstColumnTitle, 
        secondColumnTitle, 
        itemsFrontGroup, 
        itemsAllGroup, 
        stackItems, 
        stackTitle } = await usePageListSection(49, config.public.API_URL);

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
        :title="firstColumnTitle"
        :list="itemsFrontGroup"
      />
      <AppTimeLine 
        :title="secondColumnTitle"
        :list="itemsAllGroup"
      />
    </div>
    <AppStack :list="stackItems" :title="stackTitle" />
    <!-- <AppStack /> -->
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
