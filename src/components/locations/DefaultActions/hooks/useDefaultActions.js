import { useAppContext } from "../../../../hooks/useAppContext"
import { setFilter, setSort } from "../../../../actions/actions"
import { DESCENDING_SORT, ASCENDING_SORT } from "../../../../config"

export const useDefaultActions = () => {
  const { state, dispatch } = useAppContext()
  const changeFilterHandler = (evt) => setFilter(evt.target.value, dispatch)
  const sortBtnClickHandler = () => setSort(
    state.sort === ASCENDING_SORT
      ? DESCENDING_SORT 
      : ASCENDING_SORT, 
    dispatch,
  )
  const sortBtnStatusClass = state.sort === DESCENDING_SORT
    ? 'sort__desc' 
    : 'sort__asc'
  
  return {
    changeFilterHandler,
    sortBtnClickHandler,
    sortBtnStatusClass,
    categories: state.categories,
    filter: state.filter,
  }
}
