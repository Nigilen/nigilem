<script lang="ts" setup>

interface ContactsPageAcf {
  contacts__title: string;
  contacts__phone: string;
  contacts__email: string;
  contacts__address: string;
  form__title: string;
  form__button: string;
};

interface WPPage {
  id: number;
  title: { renderer: string };
  acf: ContactsPageAcf;
}

const { data: page } = await useAsyncData('page-contacts', async () => {
  const pages = await $fetch<WPPage[]>(
    'https://cms.nigilen.site/wp-json/wp/v2/pages', 
    { 
      params: { slug: 'contacts' }
    }
  );
  if (!pages.length) {
    throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  }
  return pages[0];
});

</script>

<template>
  <main>
    <AppHero :title="page.title.rendered"/>

    <AppContactsInfo
      :title="page.acf.contacts__title"
      :phone="page.acf.contacts__phone"
      :email="page.acf.contacts__email"
      :address="page.acf.contacts__address"
    />
    <AppContactsForm 
      :title="page.acf.form__title"
      :button="page.acf.form__button"
    />
  </main>
</template>