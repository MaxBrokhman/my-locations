import { useLocation } from "react-router-dom"

import { 
  LOCATION_DETAILS_PATHNAME, 
  CATEGORY_DETAILS_PATHNAME, 
  LOCATION_EDITING_PATHNAME, 
} from "../../../../config"
import { useLocationDetection } from "../../../../hooks/useLocationDetection"

export const useActivePath = () => {
  const { isCategoriesPage } = useLocationDetection()
  const { pathname } = useLocation()
  const activePath = isCategoriesPage 
    ? CATEGORY_DETAILS_PATHNAME
    : LOCATION_DETAILS_PATHNAME
  return {
    activePath: activePath === pathname 
      ? null
      : activePath,
    isEditable: pathname !== LOCATION_EDITING_PATHNAME,
  }
}
