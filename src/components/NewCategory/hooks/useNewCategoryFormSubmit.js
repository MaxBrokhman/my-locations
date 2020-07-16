import { useHistory } from "react-router-dom"

import { createCategory } from "../../../actions/actions"
import { CATEGORIES_PATHNAME } from "../../App/config"
import { useAppContext } from "../../../hooks/useAppContext"

export const useNewCategoryFormSubmit = (name) => {
  const history = useHistory()
  const { dispatch } = useAppContext()
  const submitHandler = (evt) => {
    evt.preventDefault()
    createCategory(name, dispatch)
    history.push(CATEGORIES_PATHNAME)
  }

  return {
    submitHandler,
  }
}
