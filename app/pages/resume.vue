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

const { data: page } = await useAsyncData('page-resume', async () => {
  const pages = await $fetch<WPPage[]>(
    'http://cms.nigilen.site/wp-json/wp/v2/pages', 
    { 
      params: { slug: 'resume' }
    }
  );
  if (!pages.length) {
    throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
  }
  return pages[0];
});


const { firstColumnTitle, 
        secondColumnTitle, 
        itemsFrontGroup, 
        itemsAllGroup, 
        stackItem, 
        stackTitle } = await usePageListSection(49);

</script>

<template>
  <main>
    <!-- <AppHero title="Резюме" /> -->
    <AppHero :title="page.title.rendered"/>
    <AppAbout />
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
    <AppStack :list="stackItem" :title="stackTitle" />
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
