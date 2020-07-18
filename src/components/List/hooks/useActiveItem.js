import { useAppContext } from "../../../hooks/useAppContext"
import { setAciveCategory, setActiveLocation } from "../../../actions/actions"
import { useLocationDetection } from "../../Toolbar/hooks/useLocationDetection"

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
      if (activeItem && id === activeItem.id) {
        action(null, dispatch)
      } else {
        action(
          list.find((item) => item.id === id), 
          dispatch,
        )
      }
    }

  return {
    itemClickHandler,
    dispatch,
  }
}
