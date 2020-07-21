import { useAppContext } from "../../../../hooks/useAppContext"
import { setAciveCategory, setActiveLocation } from "../../../../actions/actions"
import { useLocationDetection } from "../../../../hooks/useLocationDetection"
import { LOCATIONS_CAPTION, CATEGORIES_CAPTION } from "../../Toolbar/config"

export const useActiveItem = (list) => {
  const { state, dispatch } = useAppContext()
  const { isCategoriesPage } = useLocationDetection()

  const itemClickHandler = (id) => 
    () => {
      const activeItem = isCategoriesPage 
        ? state.activeCategory
        : state.activeLocation

      const action = isCategoriesPage
        ? setAciveCategory
        : setActiveLocation

      const activeId = activeItem && id === activeItem.id
        ? null
        : list.find((item) => item.id === id)

      action(activeId, dispatch)
    }

    const caption = isCategoriesPage 
      ? CATEGORIES_CAPTION
      : LOCATIONS_CAPTION

  return {
    itemClickHandler,
    caption,
  }
}
