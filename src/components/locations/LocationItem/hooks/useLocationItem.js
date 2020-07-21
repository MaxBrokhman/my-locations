import { useItemSelection } from "../../../../hooks/useItemSelection"
import { useCategories } from "./useCategories"

export const useLocationItem = (item) => {
  const { className } = useItemSelection(item.id)
  const { categories } = useCategories(item.categories)

  return {
    className,
    categories,
  }
}
