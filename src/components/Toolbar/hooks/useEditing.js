import { useState } from "react"

export const useEditing = () => {
  const [isEditing, setEditing] = useState(false)
  const editBtnHandler = () => setEditing(true)

  return {
    isEditing,
    setEditing,
    editBtnHandler
  }
}
