import { useHistory } from "react-router-dom"

import { LOCATIONS_PATHNAME } from "../../App/config"
import { createLocation } from "../../../actions/actions"

const ADDRESS_MESSAGE = 'Please, choose a place on the map.'
const MESSAGE = 'Please, fill all the information.' 
const COORDS = 'coordinates'
const ADDRESS = 'address'

export const useFormSubmit = ({
  dispatch, 
  data, 
  ref,
}) => {
  const history = useHistory()

  const submitHandler = (evt) => {
    evt.preventDefault()
    const emptyField = Object.entries(data).find(([key, value]) => !value.length)
    if (emptyField) {
      const message = emptyField[0] === COORDS || emptyField[0] === ADDRESS
        ? ADDRESS_MESSAGE
        : MESSAGE
      ref.current.setCustomValidity(message)
      ref.current.reportValidity()
    } else {
      createLocation(data, dispatch)
      history.push(LOCATIONS_PATHNAME)
    }
  }

  return {
    submitHandler,
  }
}
