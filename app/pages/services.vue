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

const { data: page } = await useAsyncData('page-portfolio', async () => {
  const pages = await $fetch<WPPage[]>(
    'http://cms.nigilen.site/wp-json/wp/v2/pages', 
    { 
      params: { slug: 'services' }
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
  </main>
</template>