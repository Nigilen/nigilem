<script lang="ts" setup>

interface WPFeaturedMedia {
  source_url: string;
};

interface WPPostRaw {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: { 'wp:featuredmedia'?: WPFeaturedMedia[] };
};

interface Post {
  id: number;
  dateOnly: string | undefined;
  slug: string;
  title: string;
  excerpt: string;
  featuredImageUrl: string | null;
};


const { data: posts } = useAsyncData('blog-posts', async (): Promise<Post[]> => {
  const rawPosts = await $fetch<WPPostRaw[]>(
    'https://cms.nigilen.site/wp-json/wp/v2/posts',
    {
      params: { _embed: 1 }
    }
  );

  return rawPosts.map(post => ({
    id: post.id,
    dateOnly: post.date.split('T')[0],
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    featuredImageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  }))

});

</script>


<template>
  <section class="blog-grid">
    <ul class="blog-grid__list">
      <li v-for="post in posts" :key="post" class="blog-grid__item">
        <BlogItem 
          :title="post.title"
          :description="post.excerpt"
          :image="post.featuredImageUrl"
          :url="`/blog/${post.slug}`"
          :date="post.dateOnly"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.blog-grid {
  max-inline-size: min(967px, 90%);
  margin-inline: auto;
  margin-block-end: 180px;
  
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, min(294px, 100%));
    justify-content: center;
    gap: 40px;
    padding: 0;
    list-style: none;
  }

  &__item {
    text-align: center;
  }
}
</style>