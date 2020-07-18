export const useItemEditing = (item) => ({
  isEditing: Boolean(item),
  initialName: item 
    ? item.name
    : null,
})
