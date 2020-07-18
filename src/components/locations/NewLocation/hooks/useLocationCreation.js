import { useState, useEffect } from "react"

import { locationInitialState } from "../config"

export const useLocationCreation = (data) => {
  const [location, setLocation] = useState(data || locationInitialState)
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

  useEffect(() => () => setLocation(locationInitialState), [])

  return {
    location,
    updater,
    selectHandler,
  }
}
