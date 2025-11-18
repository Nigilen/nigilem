<script lang="ts" setup>

const route = useRoute().name;

const page = await usePost('pages', String(route));

useSeoMeta({
  title: page?.value?.acf?.seo_title,
  description: page?.value?.acf?.seo_description,
  ogTitle: page?.value?.acf?.seo_title,
  ogDescription: page?.value?.acf?.seo_description,
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