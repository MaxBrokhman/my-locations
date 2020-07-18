import { useAppContext } from "../../../hooks/useAppContext"
import { setFilter } from "../../../actions/actions"

export const useCategoryDetails = () => {
  const { state, dispatch } = useAppContext()

  const toLocationsClickHandler = () => setFilter(state.activeCategory.id, dispatch)

  return {
    toLocationsClickHandler,
    name: state.activeCategory.name,
  }
}
