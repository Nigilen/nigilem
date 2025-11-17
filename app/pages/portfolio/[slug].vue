<script setup lang="ts">

interface WPPageAcf {
  seo_title: string;
  seo_description: string;
};

interface WPPage {
  title: { rendered: string };
  content: { rendered: string };
  acf: WPPageAcf;
};

const route = useRoute();
const slug = route.params.slug;

const { data: portfolioPost } = await useAsyncData('portfolio-post', async(): Promise<WPPage | undefined> => {
  const dataArr = await $fetch<WPPage[]>('https://cms.nigilen.site/wp-json/wp/v2/posts', {
    params: {
      slug: slug
    }
  });

  if (!dataArr.length) {
    throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  };

  return dataArr[0];
});

useSeoMeta({
  title: portfolioPost?.value?.acf.seo_title,
  description: portfolioPost?.value?.acf.seo_description,
  ogTitle: portfolioPost?.value?.acf.seo_title,
  ogDescription: portfolioPost?.value?.acf.seo_description,
});

</script>

<template>
  <main>
    <AppHero 
      :title="portfolioPost?.title.rendered"
    />
    <article class="article">

    <div v-html="portfolioPost?.content.rendered"></div>

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