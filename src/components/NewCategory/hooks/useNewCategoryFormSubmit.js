import { useHistory } from "react-router-dom"

import { createCategory } from "../../../actions/actions"
import { useAppContext } from "../../../hooks/useAppContext"
import { MAIN_PATHNAME } from "../../App/config"

export const useNewCategoryFormSubmit = (name) => {
  const history = useHistory()
  const { dispatch } = useAppContext()
  const submitHandler = (evt) => {
    evt.preventDefault()
    createCategory(name, dispatch)
    history.push(MAIN_PATHNAME)
  }

  return {
    submitHandler,
  }
}
