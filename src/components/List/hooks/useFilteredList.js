import { useEffect } from "react"

import { useAppContext } from "../../../hooks/useAppContext"
import { setFilter } from "../../../actions/actions"

export const useFilteredList = ({ 
  list,
  isCategories
}) => {
  const { state, dispatch } = useAppContext()
  const filtredList = !isCategories && state.filter 
    ? list.filter((item) => item.categories.includes(state.filter))
    : list
  const sortedList = !isCategories 
    ? state.sort === 'asc' 
      ? filtredList.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA > nameB) return 1
        if (nameB > nameA) return -1
        return 0
      })
      : filtredList.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return 1
        if (nameB < nameA) return -1
        return 0
      })
    : filtredList

  useEffect(() => () => {
    setFilter('', dispatch)
  }, [])
  return {
    sortedList, 
  }
}
