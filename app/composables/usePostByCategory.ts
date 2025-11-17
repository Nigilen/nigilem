interface WPFeaturedMedia {
  source_url: string;
};

interface IPost {
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
  content: string;
  featuredImageUrl: string | null;
};

export const usePostByCategory = async (apiUrl: string, categoryId?: number): Promise<Post[]> => {
  const params: Record<string, string | number | boolean> = {
    per_page: 50,
    _embed: true,
  };
  if (categoryId) params.categories = categoryId;

  const posts = await $fetch<IPost[]>(`${apiUrl}/wp-json/wp/v2/posts`, { params });

  return posts.map(post => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    dateOnly: post.date,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    featuredImageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  }));
};