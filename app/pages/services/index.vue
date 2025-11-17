<script lang="ts" setup>

interface ContactsPageAcf {
  contacts__title: string;
  contacts__phone: string;
  contacts__email: string;
  contacts__address: string;
  form__title: string;
  form__button: string;
  seo_title: string;
  seo_description: string;
};

interface WPPage {
  id: number;
  title: { rendered: string };
  acf: ContactsPageAcf;
}

const route = useRoute().name;

const { data: page } = await useAsyncData('page-services', async (): Promise<WPPage | undefined> => {
  const pages = await $fetch<WPPage[]>(
    'https://cms.nigilen.site/wp-json/wp/v2/pages', 
    { params: { slug: route } }
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




const portfolioList = await usePostByCategory(4);

</script>


<template>
  <main>
    <AppHero :title="page?.title.rendered"/>

    <ul>
      <li v-for="item in portfolioList" :key="item.id">
        <a :href="`/services/${item.slug}`">{{ item.title }}</a>
      </li>
    </ul>
  </main>
</template>