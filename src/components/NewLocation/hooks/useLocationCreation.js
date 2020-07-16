import { useState } from "react"

export const useLocationCreation = () => {
  const [location, setLocation] = useState({})
  const updater = (newData) => {
    console.log('new data', newData, location)
    setLocation({
    ...location,
    ...newData,
  })
  console.log(location);
}
  return {
    location,
    updater,
  }
}
