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
      // in case there is only one checkbox
      const values = formRef.current.categories.length 
        ? Array.from(formRef.current.categories)
          .filter((input) => input.checked)
          .map((input) => input.value)
        : [formRef.current.categories.value]

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
    setLocation,
  }
}
