import { useState } from "react"

export const useLocationCreation = () => {
  const [location, setLocation] = useState({})
  const updater = (newData) => setLocation({
    ...location,
    ...newData,
  })

  const selectHandler = (evt) => {
    if (evt.target.selectedOptions) {
      const options = Array.from(evt.target.selectedOptions)
      setLocation({
        ...location,
        categories: options.map((option) => option.value),
      })
    }
  }
  return {
    location,
    updater,
    selectHandler,
  }
}
