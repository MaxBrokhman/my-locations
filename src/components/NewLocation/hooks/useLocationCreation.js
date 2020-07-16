import { useState, useEffect } from "react"

const initialState = {
  categories: [],
  coordinates: [],
  name: '',
  address: '',
} 

export const useLocationCreation = () => {
  const [location, setLocation] = useState(initialState)
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

  useEffect(() => () => setLocation(initialState), [])

  return {
    location,
    updater,
    selectHandler,
  }
}
