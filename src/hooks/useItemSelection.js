import { useAppContext } from "./useAppContext"
import { useLocationDetection } from "../components/Toolbar/hooks/useLocationDetection"

export const useItemSelection = (id) => {
  const { state } = useAppContext()
  const { isCategoriesPage } = useLocationDetection()
  const activeItem = isCategoriesPage 
    ? state.activeCategory
    : state.activeLocation 
  return {
    className: 
    `list-group-item categories-item ${
      activeItem && activeItem.id === id 
        ? 'active' 
        : ''
    }`
  }
}
