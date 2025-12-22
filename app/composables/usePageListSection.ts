interface PageAcf {
  [key: string]: unknown;
}

interface WpPage {
  id: number;
  title: { rendered: string } | string;
  acf?: PageAcf;
}

interface ListAcf {
  text?: string;
  caption?: string;
  title?: string;
  date?: string;
}

interface ListItem {
  id: number;
  acf: ListAcf;
}

interface AcfItems {
  id: number,
  text: string,
  title?: string,
  date?: string,
};

interface PageListSection {
  title: string;
  clearSelectedItems: AcfItems[];
};

export const usePageListSection = async (
  pageId: number, 
  apiUrl: string, 
  listName: string,
): Promise<PageListSection> => {
  const params = { acf_format: 'standard', per_page: 100 };
  const page = await $fetch<WpPage>(`${apiUrl}/wp-json/wp/v2/pages/${pageId}`);

  const title = page?.acf?.[`${listName}_title`] as string;
  const selectedListItems = page?.acf?.[`${listName}_items_selected`];

  if (!Array.isArray(selectedListItems) || selectedListItems.length === 0) {
    return {
      title,
      clearSelectedItems: [],
    };
  };

  const itemsById = new Map();
  const itemsList = await $fetch<ListItem[]>(`${apiUrl}/wp-json/wp/v2/${listName}`, { params });
  itemsList.forEach((item) => itemsById.set(item.id, item));

  const selectedIds = selectedListItems.map(item => item.ID || item.id);
  const selectedItems = selectedIds.map(id => itemsById.get(Number(id))).filter(Boolean);
  const clearSelectedItems = selectedItems.map(item => ({
    id: item.id,
    text: item.acf.text,
    caption: item.acf.caption,
    title: item.acf.title,
    date: item.acf.date,
  }));

  return {
    title,
    clearSelectedItems,
  };
};