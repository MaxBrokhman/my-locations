import { deleteCategory } from "../../../actions/actions"

export const useToolbarHandlers = (dispatch) => {
  const deleteBtnHandler = () => deleteCategory(dispatch)
  return {
    deleteBtnHandler,
  }
}
