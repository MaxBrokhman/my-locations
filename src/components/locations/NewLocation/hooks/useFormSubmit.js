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

const checkValidation = ({
  element, 
  message, 
  alignToTop,
}) => {
  element.scrollIntoView(alignToTop)
  element.setCustomValidity(message)
  element.reportValidity()
}

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
      const isPlaceNotSelected = emptyField[0] === COORDS 
        || emptyField[0] === ADDRESS
      const message = isPlaceNotSelected
        ? ADDRESS_MESSAGE
        : MESSAGE
      
      const input = isPlaceNotSelected 
        ? findGeocoderInput(formRef.current.elements)
        : formRef.current[emptyField[0]]

      input.length 
        ? checkValidation({
          element: input[0], 
          message, 
          alignToTop: true,
        }) 
        : checkValidation({
          element: input, 
          message, 
          alignToTop: false,
        })

    } else {
      submitAction(data, dispatch)
      history.push(LOCATIONS_PATHNAME)
    }
  }

  return {
    submitHandler,
  }
}
