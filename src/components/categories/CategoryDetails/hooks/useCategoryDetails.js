import { useAppContext } from "../../../../hooks/useAppContext"
import { setFilter, setActiveLocation } from "../../../../actions/actions"

export const useCategoryDetails = () => {
  const { state, dispatch } = useAppContext()

  const toLocationsClickHandler = () => {
    setActiveLocation(null, dispatch)
    setFilter(state.activeCategory.id, dispatch)
  }

  return {
    toLocationsClickHandler,
    name: state.activeCategory.name,
  }
}
