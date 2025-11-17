export const usePageListSection = async (pageId: number, apiUrl: string) => {
  // просто базовые параметры запросов
  const params = { acf_format: 'standard', per_page: 100 };
  // определеяем, на какой странице работаем
  const page = await $fetch(`${apiUrl}/wp-json/wp/v2/pages/${pageId}`, {});

  // собираем со страницы данные (тут сильно привязанно к конкретной странице)
  const stackTitle = page?.acf?.stack_title || '';
  const firstColumnTitle = page?.acf?.first_column_title || '';
  const secondColumnTitle = page?.acf?.second_column_title || '';
  const selectedListItems = page?.acf?.selected_list_items || [];

  // прежде, проверяем есть ли данные selected_list_items
  if (!Array.isArray(selectedListItems) || selectedListItems.length === 0) {
    return {
      firstColumnTitle,
      secondColumnTitle,
      itemsFrontGroup: [],
      itemsAllGroup: []
    };
  };

  // заранее готовим мапу
  const itemsById = new Map();

  // целенаправленно забираем список один — опыт (обьекты)
  const allItems = await $fetch(`${apiUrl}/wp-json/wp/v2/experience-list`, { params });
  // заполняем им мапу под его id-шники
  allItems.forEach((item: any) => {
    itemsById.set(item.id, item);
  });
  
  // целенаправленно забираем список второй — стек (просто строки)
  const stackList = await $fetch(`${apiUrl}/wp-json/wp/v2/techstack-list`, { params });
  // формируем мапу из объектов со строками, тут с ним закончили
  const stackItems = stackList.map((item: any) => ({
    title: item.title.rendered,
  }));

  // делаем мапу id элементов
  const selectedIds = selectedListItems.map(item => item.ID || item.id);
  // делаем мапу только по выбранным id-шникам
  const selectedItems = selectedIds.map(id => itemsById.get(Number(id))).filter(Boolean);

  // из этой мапы посредством фильтра и новой мапы создаем список один
  const itemsFrontGroup = selectedItems
    .filter((item: any) => item.acf?.group === 'red')
    .map((item: any) => ({
      id: item.id,
      title: item.title.rendered,
      description: item.acf?.exp_description || '',
      date_text: item.acf?.exp_date || ''
    }));

  // из этой мапы посредством фильтра и новой мапы создаем список второй
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
    stackItems,
    stackTitle,
    itemsFrontGroup,
    itemsAllGroup,
  };
};