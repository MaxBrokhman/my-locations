import { useAppContext } from "../../../reducer/reducer"
import { setActiveCategory } from "../../../actions/actions"

export const useActiveItem = () => {
  const {state, dispatch} = useAppContext()
  const itemClickHandler = (id) => 
    () => state.activeCategory && id === state.activeCategory.id 
      ? setActiveCategory(null, dispatch)
      : setActiveCategory(
          state.categories.find((item) => item.id === id), 
          dispatch,
        )

  return {
    categories: state.categories,
    itemClickHandler,
    dispatch,
    activeCategory: state.activeCategory,
  }
}
