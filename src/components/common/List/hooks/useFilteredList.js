import { useEffect } from "react"

import { useAppContext } from "../../../../hooks/useAppContext"
import { setFilter } from "../../../../actions/actions"
import { ASCENDING_SORT } from "../../../../config"
import { sortStringsAsc, sortStringsDesc } from "../utils"

export const useFilteredList = ({ 
  list,
  isCategories
}) => {
  const { state, dispatch } = useAppContext()
  const filtredList = !isCategories && state.filter 
    ? list.filter((item) => item.categories.includes(state.filter))
    : list
  const sortedList = !isCategories 
    ? state.sort === ASCENDING_SORT
      ? filtredList.sort(sortStringsAsc)
      : filtredList.sort(sortStringsDesc)
    : filtredList

  const wrapperClassName = sortedList.length 
    ? 'justify-content-start'
    : 'justify-content-center'

  useEffect(() => () => {
    setFilter('', dispatch)
  }, [])
  return {
    sortedList, 
    wrapperClassName,
  }
}
