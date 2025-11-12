export const usePageListSection = async (pageId: number) => {

  const page = await $fetch(`http://cms.nigilen.site/wp-json/wp/v2/pages/${pageId}`, {
  });

  const stackTitle = page.acf?.stack_title || '';
  const firstColumnTitle = page.acf?.first_column_title || '';
  const secondColumnTitle = page.acf?.second_column_title || '';
  const itemIds = page.acf?.selected_list_items || [];

  if (!Array.isArray(itemIds) || itemIds.length === 0) {
    return {
      firstColumnTitle,
      secondColumnTitle,
      itemsFrontGroup: [],
      itemsAllGroup: []
    };
  };

  const allItems = await $fetch(`http://cms.nigilen.site/wp-json/wp/v2/experience-list`, {
    params: {
      acf_format: 'standard',
      per_page: 100,
    }
  });

  const stackList = await $fetch(`http://cms.nigilen.site/wp-json/wp/v2/techstack-list`, {
    params: {
      acf_format: 'standard',
      per_page: 100,
    }
  });

  const itemsById = new Map();

  allItems.forEach((item: any) => {
    itemsById.set(item.id, item);
  });

  const stackItem = stackList.map((item: any) => ({
    title: item.title.rendered,
  }));

  const ids = itemIds.map(item => item.ID || item.id);
  const selectedItems = ids
    .map(id => itemsById.get(Number(id)))
    .filter(Boolean);

  const itemsFrontGroup = selectedItems
    .filter((item: any) => item.acf?.group === 'red')
    .map((item: any) => ({
      id: item.id,
      title: item.title.rendered,
      description: item.acf?.exp_description || '',
      date_text: item.acf?.exp_date || ''
    }));

  const itemsAllGroup = selectedItems
    .filter((item: any) => item.acf?.group === 'blue')
    .map((item: any) => ({
      id: item.id,
      title: item.title.rendered,
      description: item.acf?.exp_description || '',
      date_text: item.acf?.exp_date || ''
    }));

  return {
    firstColumnTitle,
    secondColumnTitle,
    itemsFrontGroup,
    itemsAllGroup,
    stackItem,
    stackTitle
  };
};