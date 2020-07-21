import { useLocationDetection } from "../../Toolbar/hooks/useLocationDetection"
import { useFilteredList } from "./useFilteredList"
import { useActiveItem } from "./useActiveItem"

export const useList = (list) => {
  const { isCategoriesPage } = useLocationDetection()
  const { itemClickHandler, caption } = useActiveItem(list)
  const { sortedList, wrapperClassName } = useFilteredList({
    isCategories: isCategoriesPage,
    list,
  })

  return {
    sortedList,
    itemClickHandler,
    caption,
    wrapperClassName,
  }
}

