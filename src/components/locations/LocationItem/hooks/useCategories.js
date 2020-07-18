import { useAppContext } from "../../../../hooks/useAppContext"

export const useCategories = (categories) => {
  const { state } = useAppContext()
  return {
    categories: categories.map(
      (id) => state.categories.find((item) => item.id === id)
    ),
  }
}
