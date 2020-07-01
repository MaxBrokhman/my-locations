import { useState } from "react"

import { updateActiveCategory } from "../../actions/actions"
import { useAppContext } from "../../reducer/reducer"

export const useEditForm = ({
  name, 
  setEditing,
}) => {
  const {dispatch} = useAppContext()
  const [editedName, setName] = useState(name)
  const editInputHandler = (evt) => setName(evt.target.value)
  const submitEditHandler = (evt) => {
    evt.preventDefault()
    setEditing(false)
    updateActiveCategory(editedName, dispatch)
  }
  const cancelHandler = () => {
    setEditing(false)
  }
  return {
    editInputHandler,
    editedName,
    submitEditHandler,
    cancelHandler,
  }
}
