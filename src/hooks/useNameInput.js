import { useEffect, useState } from "react"

export const useNameInput = (inputRef, initialValue) => {
  const [name, setName] = useState(initialValue || '')
  const changeHandler = (evt) => setName(evt.target.value)

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus()
    }
    return () => setName('')
  }, [inputRef])

  return {
    name,
    changeHandler,
  }
}
