import type { RuntimeConfig } from 'nuxt/schema';
import type { RouteRecordNameGeneric } from 'vue-router';
import type { WPContactsPage } from '~/types';

export const usePage = async (config: RuntimeConfig, route: RouteRecordNameGeneric) => {
  const { data: page } = await useAsyncData(`'page-${String(route)}'`, async (): Promise<WPContactsPage | undefined> => {
    const pages = await $fetch<WPContactsPage[]>(
      `${config.public.API_URL}/wp-json/wp/v2/pages`, 
      { params: { slug: route } }
    );
    if (!pages.length) throw createError({ statusCode: 404, statusMessage: 'Такой страницы нет' });
    return pages[0];
  });
  return page;
};
