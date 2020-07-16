import { useEffect, useState } from "react"

export const useNewCategoryForm = (inputRef, fieldName) => {
  const [field, setField] = useState('')
  const changeHandler = (evt) => setField(evt.target.value)

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus()
    }
    return () => setField('')
  }, [inputRef])

  return {
    [fieldName]: field,
    [`${fieldName}Handler`]: changeHandler,
  }
}
