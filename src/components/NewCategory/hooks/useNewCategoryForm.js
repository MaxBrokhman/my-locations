import { useHistory } from "react-router-dom"
import { useEffect } from "react"

import { enterCategoryName, createCategory } from "../../../actions/actions"
import { MAIN_PATHNAME } from "../../App/config"
import { useAppContext } from "../../../reducer/reducer"

export const useNewCategoryForm = (inputRef) => {
  const { state, dispatch } = useAppContext() 
  const history = useHistory()
  const nameInputHandler = (evt) => enterCategoryName(evt.target.value, dispatch)

  const submitNameHandler = (evt) => {
    evt.preventDefault()
    createCategory(state.newCategoryName, dispatch)
    history.push(MAIN_PATHNAME)
  }

  useEffect(() => {
    inputRef.current.focus()
    return () => enterCategoryName('', dispatch)
  }, [dispatch, inputRef])

  return {
    nameInputHandler,
    submitNameHandler,
    name: state.newCategoryName,
  }
}
