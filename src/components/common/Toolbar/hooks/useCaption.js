import { useLocation } from "react-router-dom"

import { NEW_CATEGORY_PATHNAME, NEW_LOCATION_PATHNAME } from "../../../../config";
import { 
  NEW_LOCATION_CAPTION, 
  NEW_CATEGORY_CAPTION, 
  CATEGORIES_CAPTION, 
  LOCATIONS_CAPTION,
} from "../config";

export const useCaption = (activeItem, isCategoriesPage) => {
  const { pathname } = useLocation()
  if (pathname === NEW_CATEGORY_PATHNAME) {
    return { caption: NEW_CATEGORY_CAPTION }
  }
  if (pathname === NEW_LOCATION_PATHNAME) {
    return { caption: NEW_LOCATION_CAPTION }
  }
  if (activeItem) {
    return { caption: activeItem.name }
  }
  return isCategoriesPage 
    ? { caption: CATEGORIES_CAPTION }
    : { caption: LOCATIONS_CAPTION }
}
