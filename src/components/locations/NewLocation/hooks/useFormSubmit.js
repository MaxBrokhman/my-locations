import { useHistory } from "react-router-dom"

import { LOCATIONS_PATHNAME } from "../../../../config"
import { createLocation, updateLocation } from "../../../../actions/actions"
import { 
  ID_FIELD, 
  ADDRESS_MESSAGE, 
  MESSAGE,
  COORDS,
  ADDRESS, 
} from "../config"
import { findGeocoderInput } from "../utils"

export const useFormSubmit = ({
  dispatch, 
  data, 
  isEditing,
  formRef,
}) => {
  const history = useHistory()

  const submitAction = isEditing 
    ? updateLocation
    : createLocation

  const submitHandler = (evt) => {
    evt.preventDefault()
    const emptyField = Object.entries(data).find(
      ([key, value]) => key !== ID_FIELD && !value.length
    )
    if (emptyField) {
      const message = emptyField[0] === COORDS || emptyField[0] === ADDRESS
        ? ADDRESS_MESSAGE
        : MESSAGE
        
      const searchInput = findGeocoderInput(formRef.current.elements)
      if (message === ADDRESS_MESSAGE && searchInput) {
        searchInput.setCustomValidity(message)
        searchInput.reportValidity()
      }
    } else {
      submitAction(data, dispatch)
      history.push(LOCATIONS_PATHNAME)
    }
  }

  return {
    submitHandler,
  }
}
