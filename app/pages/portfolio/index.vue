<script lang="ts" setup>

interface WPPage {
  id: number;
  title: { rendered: string };
  acf: {
    seo_title: string;
    seo_description: string;
  };
};

const route = useRoute().name;

const { data: page } = await useAsyncData('portfolio-page', async(): Promise<WPPage | undefined> => {
  const dataArr = await $fetch<WPPage[]>(
    'https://cms.nigilen.site/wp-json/wp/v2/pages', 
    { params: { slug: route } }
  );
  if(!dataArr.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  return dataArr[0];
});


useSeoMeta({
  title: page?.value?.acf.seo_title,
  description: page?.value?.acf.seo_description,
  ogTitle: page?.value?.acf.seo_title,
  ogDescription: page?.value?.acf.seo_description,
});


const portfolioList = await usePostByCategory(3);


</script>


<template>
  <main>
    <AppHero :title="page?.title.rendered"/>

    <PortfolioGrid :posts="portfolioList"/>
  </main>
</template>