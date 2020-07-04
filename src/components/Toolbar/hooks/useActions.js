import { useState } from "react"

import { deleteCategory } from "../../../actions/actions"

export const useActions = (dispatch) => {
  const [isEditing, setEditing] = useState(false)
  const editBtnHandler = () => setEditing(true)
  const deleteBtnHandler = () => deleteCategory(dispatch)

  return {
    isEditing,
    editBtnHandler,
    setEditing,
    deleteBtnHandler,
  }
}
