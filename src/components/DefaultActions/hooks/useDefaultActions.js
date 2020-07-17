import { useAppContext } from "../../../hooks/useAppContext"
import { setFilter, setSort } from "../../../actions/actions"

export const useDefaultActions = () => {
  const { state, dispatch } = useAppContext()
  const changeFilterHandler = (evt) => setFilter(evt.target.value, dispatch)
  const sortBtnClickHandler = () => setSort(state.sort === 'asc' ? 'desc' : 'asc', dispatch)
  const sortBtnStatusClass = state.sort === 'desc' 
    ? 'sort__desc' 
    : 'sort__asc'

  return {
    changeFilterHandler,
    sortBtnClickHandler,
    sortBtnStatusClass,
    categories: state.categories,
  }
}
