import type { WPPost } from '~/types';

type ContentType = 'pages' | 'posts';

export const usePost = async (contentType: ContentType, slug: string) => {
  const cache = useState<Record<string, WPPost | undefined>>(`${contentType}-cache`, () => ({}));
  const cacheKey = `${contentType}-${slug}`;

  if(cache.value[cacheKey]) {
    return computed(() => cache.value[cacheKey]);
  };

  const { data } = await useAsyncData(cacheKey, async () => {
    const items = await $fetch<WPPost[]>(
      `${useRuntimeConfig().public.API_URL}/wp-json/wp/v2/${contentType}`, 
      { params: { slug: slug } }
    );
    if (!items.length) throw createError({ statusCode: 404, statusMessage: `Такой ${contentType === 'posts' ? 'статьи' : 'страницы'} нет` });
    const item = items[0];
    cache.value[cacheKey] = item;
    return item;
  });
  return data;
};