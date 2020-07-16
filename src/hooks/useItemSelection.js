import { useAppContext } from "./useAppContext"

export const useItemSelection = (id) => {
  const { state } = useAppContext()
  return {
    className: 
    `list-group-item categories-item ${
      state.activeItem && state.activeItem.id === id 
        ? 'active' 
        : ''
    }`
  }
}
