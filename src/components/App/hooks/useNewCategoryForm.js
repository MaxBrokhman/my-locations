import { useHistory } from "react-router-dom"
import { enterCategoryName, createCategory } from "../../../actions/actions"

export const useNewCategoryForm = (name, dispatch) => {
  const history = useHistory()
  const nameInputHandler = (evt) => enterCategoryName(evt.target.value, dispatch)

  const submitNameHandler = (evt) => {
    evt.preventDefault()
    createCategory(name, dispatch)
    history.push('/')
  }
  return {
    nameInputHandler,
    submitNameHandler,
  }
}
