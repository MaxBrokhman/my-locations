import { useEffect, useState } from "react"

export const useNameInput = (inputRef) => {
  const [name, setName] = useState('')
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
