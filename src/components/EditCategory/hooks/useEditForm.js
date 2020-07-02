import { useState, useEffect } from "react"

import { updateActiveCategory } from "../../../actions/actions"
import { useAppContext } from "../../../reducer/reducer"

export const useEditForm = ({
  name, 
  setEditing,
  inputRef,
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

  useEffect(() => {
    inputRef.current.focus()
    return () => setEditing(false)
  }, [setEditing, inputRef])
  
  return {
    editInputHandler,
    editedName,
    submitEditHandler,
    cancelHandler,
  }
}
