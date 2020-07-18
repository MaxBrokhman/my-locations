import { useAppContext } from "../../../../hooks/useAppContext"
import { useNameInput } from "../../../../hooks/useNameInput"
import { useFormSubmit } from "./useFormSubmit"
import { useItemEditing } from "./useItemEditing"
import { useLocationCreation } from "./useLocationCreation"
import { useGeocoder } from "./useGeocoder"

export const useNewLocation = ({
  nameRef, 
  formRef,
  editableItem,
}) => {
  const { state, dispatch } = useAppContext()
  const { 
    location, 
    updater, 
    checkHandler,
    position,
  } = useLocationCreation(editableItem, formRef)
  const { 
    initialName, 
    isEditing,
  } = useItemEditing(editableItem)
  const { changeHandler, name } = useNameInput(nameRef, initialName)
  const { submitHandler } = useFormSubmit({
    dispatch, 
    data: {
      ...location,
      ...position,
      name,
    },
    isEditing,
    formRef,
  })
  useGeocoder(updater, editableItem)

  return {
    submitHandler,
    changeHandler,
    checkHandler,
    name,
    locationCategories: location.categories,
    categories: state.categories,
  }
}
