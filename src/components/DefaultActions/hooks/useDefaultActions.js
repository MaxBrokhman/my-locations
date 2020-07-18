import { useAppContext } from "../../../hooks/useAppContext"
import { setFilter, setSort } from "../../../actions/actions"

const ASC = 'asc'
const DESC = 'desc'

export const useDefaultActions = () => {
  const { state, dispatch } = useAppContext()
  const changeFilterHandler = (evt) => setFilter(evt.target.value, dispatch)
  const sortBtnClickHandler = () => setSort(
    state.sort === ASC
      ? DESC 
      : ASC, 
    dispatch,
  )
  const sortBtnStatusClass = state.sort === DESC
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
