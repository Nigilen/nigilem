interface IPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
};

export const usePostByCategory = async (categoryId: number) => {
  const posts = await $fetch(`https://cms.nigilen.site/wp-json/wp/v2/posts`, {
    params: {
      categories: categoryId,
      per_page: 20,
      _embed: true,
    }
  });

  return posts.map((post: IPost) => ({
    id: post.id,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    title: post.title.rendered,
    content: post.content.rendered,
  }));
}