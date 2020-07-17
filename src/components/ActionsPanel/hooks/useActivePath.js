import { useLocation } from "react-router-dom"
import { LOCATION_DETAILS_PATHNAME, CATEGORY_DETAILS_PATHNAME } from "../../App/config"

export const useActivePath = (isCategoriesPage) => {
  const { pathname } = useLocation()
  const activePath = isCategoriesPage 
    ? CATEGORY_DETAILS_PATHNAME
    : LOCATION_DETAILS_PATHNAME
  return {
    activePath: activePath === pathname 
      ? null
      : activePath,
  }
}
