import { useLocation } from "react-router-dom"

import { NEW_CATEGORY_PATHNAME } from "../../App/config";

export const useCaption = (activeItem) => {
  const { pathname } = useLocation()
  if (pathname === NEW_CATEGORY_PATHNAME) {
    return { caption: 'New Category' }
  }
  if (activeItem) {
    return { caption: activeItem.name }
  }
  return { caption: 'Categories'}
}
