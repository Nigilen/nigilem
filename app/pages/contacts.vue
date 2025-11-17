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
};

const route = useRoute().name;
const config = useRuntimeConfig();

const { data: page } = await useAsyncData('page-contacts', async (): Promise<WPPage | undefined> => {
  const pages = await $fetch<WPPage[]>(
    `${config.public.API_URL}/wp-json/wp/v2/pages`, 
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

</script>

<template>
  <main>
    <AppHero :title="page?.title?.rendered"/>

    <AppContactsInfo
      :title="page?.acf?.contacts__title"
      :phone="page?.acf?.contacts__phone"
      :email="page?.acf?.contacts__email"
      :address="page?.acf?.contacts__address"
    />
    <AppContactsForm 
      :title="page?.acf?.form__title"
      :button="page?.acf?.form__button"
    />
  </main>
</template>