// Backend is returning a duplicated item XMI-RN13P5G which causes unexpected behaviors
// A proper fix should be handled on the backend to ensure unique items in the response
// As a temporary workaround, I fetch more items and filter them down to get 20 unique ones
export const getUniqueItems = (items, limit) => {
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );
  return uniqueItems.slice(0, limit);
};
