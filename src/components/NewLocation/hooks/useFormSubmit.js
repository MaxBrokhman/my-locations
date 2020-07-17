import { useHistory } from "react-router-dom"

import { LOCATIONS_PATHNAME } from "../../App/config"
import { createLocation, updateLocation } from "../../../actions/actions"

const ADDRESS_MESSAGE = 'Please, choose a place on the map.'
const MESSAGE = 'Please, fill all the information.' 
const COORDS = 'coordinates'
const ADDRESS = 'address'
const ID_FIELD = 'id'
const GEOCODER_CLASS = 'geocoder'

const findGeocoderInput = (elems) => {
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].className.includes(GEOCODER_CLASS)) {
      return elems[i]
    } 
  }
  return null
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
