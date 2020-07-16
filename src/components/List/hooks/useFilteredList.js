import { useAppContext } from "../../../hooks/useAppContext"

export const useFilteredList = ({ 
  list,
  isCategories
}) => {
  const { state } = useAppContext()
  return {
    filteredList: !isCategories && state.filter 
      ? list.filter((item) => item.categories.includes(state.filter))
      : list, 
  }
}
