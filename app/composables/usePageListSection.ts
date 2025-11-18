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
  const page = await $fetch(`${apiUrl}/wp-json/wp/v2/pages/${pageId}`);

  const title = page?.acf?.[`${listName}_title`];
  const selectedListItems = page?.acf?.[`${listName}_items_selected`];

  if (!Array.isArray(selectedListItems) || selectedListItems.length === 0) {
    return {
      title,
      clearSelectedItems: [],
    };
  };

  const itemsById = new Map();
  const itemsList: any = await $fetch(`${apiUrl}/wp-json/wp/v2/${listName}-list`, { params });
  itemsList.forEach((item: any) => itemsById.set(item.id, item));

  const selectedIds = selectedListItems.map(item => item.ID || item.id);
  const selectedItems = selectedIds.map(id => itemsById.get(Number(id))).filter(Boolean);
  const clearSelectedItems = selectedItems.map(item => ({
    id: item.id,
    text: item.acf.text,
    title: item.acf.title,
    date: item.acf.date,
  }));

  return {
    title,
    clearSelectedItems,
  };
};