import { useHistory } from "react-router-dom"
import { enterCategoryName, createCategory, deleteCategory } from "../../actions/actions"

export const useNameInputHandler = (name, dispatch) => {
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

export const useToolbarHandlers = (dispatch) => {
  const deleteBtnHandler = () => deleteCategory(dispatch)
  
  return {
    deleteBtnHandler,
  }
}
