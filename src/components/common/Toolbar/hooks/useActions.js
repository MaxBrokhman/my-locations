import { useState } from "react"
import { useHistory } from "react-router-dom"

import { deleteCategory, deleteLocation } from "../../../../actions/actions"
import { LOCATION_EDITING_PATHNAME } from "../../../../config"
import { getAlertMessage } from "../utils"

export const useActions = ({
  dispatch, 
  isCategoriesPage,
  locations,
  activeItem,
}) => {
  const history = useHistory()
  const [isEditing, setEditing] = useState(false)
  const editBtnHandler = isCategoriesPage 
    ? () => setEditing(true)
    : () => history.push(LOCATION_EDITING_PATHNAME)

  const deleteCategoryHandler = () => {
    const locationWithOneCategory = locations.find((location) => {
      const isLocationCategory = location.categories.includes(activeItem.id)
      const isOnlyCategory = location.categories.length === 1
      return isLocationCategory && isOnlyCategory
    })
    locationWithOneCategory 
      ? alert(
        getAlertMessage(locationWithOneCategory.name, activeItem.name)
      )
      : deleteCategory(dispatch)
  }
  
  const deleteBtnHandler = isCategoriesPage
    ? deleteCategoryHandler
    : () => deleteLocation(dispatch)

  return {
    isEditing,
    editBtnHandler,
    setEditing,
    deleteBtnHandler,
  }
}
