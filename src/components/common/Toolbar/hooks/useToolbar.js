import { useAppContext } from "../../../../hooks/useAppContext"
import { useCaption } from "./useCaption"
import { useActions } from "./useActions"
import { useLocationDetection } from "./useLocationDetection"

export const useToolbar = () => {
  const { state, dispatch } = useAppContext()
  const { 
    isCategoriesPage, 
    isLocationsPage,
  } = useLocationDetection()
  const activeItem = isCategoriesPage 
    ? state.activeCategory 
    : state.activeLocation
  const { caption } = useCaption(activeItem, isCategoriesPage)
  const {
    editBtnHandler,
    isEditing,
    setEditing,
    deleteBtnHandler,
  } = useActions({
    dispatch, 
    isCategoriesPage,
    activeItem: activeItem,
    locations: state.locations,
  })

  return {
    editBtnHandler,
    setEditing,
    deleteBtnHandler,
    caption,
    activeItem,
    isEditCategoryShown: isEditing 
      && activeItem 
      && isCategoriesPage,
    isDefaultActionsShown: !activeItem && isLocationsPage,
  }
}

