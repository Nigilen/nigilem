import type { WPPost } from '~/types';

type ContentType = 'pages' | 'posts';

// export const usePost = async (contentType: ContentType, slug: string) => {
//   const cacheKey = `${contentType}-${slug}`;

//   const { data } = await useAsyncData(cacheKey, async () => {
//     const items = await $fetch<WPPost[]>(
//       `${useRuntimeConfig().public.API_URL}/wp-json/wp/v2/${contentType}`, 
//       { params: { slug: slug } }
//     );
//     if (!items.length) throw createError({ statusCode: 404, statusMessage: `Такой ${contentType === 'posts' ? 'статьи' : 'страницы'} нет` });
//     return items[0];
//   });
//   return data;
// };


export const usePost = async (contentType: ContentType, slug: string) => {
  const cacheKey = `${contentType}-${slug}`;

  const { data } = await useAsyncData(cacheKey, 
    () => $fetch<WPPost[]>(
      `${useRuntimeConfig().public.API_URL}/wp-json/wp/v2/${contentType}`, 
      { params: { slug: slug }
    }),
    {
      transform: (data) => {
        const item = data[0];
        if (item) {
          return {
            title: item.title.rendered,
            content: item.content.rendered,
            id: item.id,
            date: item.date,
            slug: item.slug,
            excerpt: item.excerpt,
            acf: item.acf,
            _embedded: item._embedded,
          };
        }
        return null;
      }
    }
  );
  return data;
};
