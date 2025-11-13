<script lang="ts" setup>

const portfolioList = await usePostByCategory(3);


const { data: post } = await useFetch(`https://cms.nigilen.site/wp-json/wp/v2/pages?slug=portfolio`, {
  params: {
    params: { _embed: 1 }
  }
});

const article = post.value?.[0];

</script>


<template>
  <main>
    <AppHero :title="article.title.rendered"/>

    <PortfolioGrid :posts="portfolioList"/>
  </main>
</template>