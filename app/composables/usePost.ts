import type { RuntimeConfig } from 'nuxt/schema';
import type { WPPostPage } from '~/types';

export const usePost = async (config: RuntimeConfig, route: string | string[] | undefined) => {
  const { data: page } = await useAsyncData(`'page-${String(route)}'`, async (): Promise<WPPostPage | undefined> => {
    const pages = await $fetch<WPPostPage[]>(
      `${config.public.API_URL}/wp-json/wp/v2/posts`, 
      { params: { slug: route } }
    );
    if (!pages.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
    return pages[0];
  });
  return page;
};