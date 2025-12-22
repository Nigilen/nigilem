import type { Post, WPPost } from '~/types';

export const usePostByCategory = async (apiUrl: string, categoryId?: number): Promise<Post[]> => {
  const params: Record<string, string | number | boolean> = {
    per_page: 50,
    _embed: true,
  };
  if (categoryId) params.categories = categoryId;

  const posts = await $fetch<WPPost[]>(`${apiUrl}/wp-json/wp/v2/posts`, { params });

  return posts.map(post => ({
    id: post.id,
    acf: post.acf,
    title: post.title.rendered,
    slug: post.slug,
    dateOnly: post.date,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    featuredImageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  }));
};