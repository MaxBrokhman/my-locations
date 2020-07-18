import { useState, useEffect } from "react"

import { locationInitialState } from "../config"

export const useLocationCreation = (data, formRef) => {
  const [location, setLocation] = useState(data || locationInitialState)
  const [position, setPosition] = useState({})
  const updater = (newData) => {
    setPosition({
    ...newData,
  })}

  const checkHandler = () => {
    if (formRef && formRef.current) {
      const values = Array.from(formRef.current.categories)
        .filter((input) => input.checked)
        .map((input) => input.value)

      setLocation({
        ...location,
        categories: values,
      })
    }
  }

  useEffect(() => () => setLocation(locationInitialState), [])

  return {
    location,
    updater,
    checkHandler,
    position,
  }
}
