import { useLocation } from "react-router-dom"

import { 
  LOCATIONS_PATHNAME, 
  MAIN_PATHNAME, 
  URL_PREFIX, 
} from "../config"
import { CATEGORIE_CHECK } from "../components/common/Toolbar/config"

export const useLocationDetection = () => {
  const { pathname } = useLocation()
  const isCategoriesPage = pathname === MAIN_PATHNAME 
    || pathname === URL_PREFIX
    || pathname.toLowerCase().includes(CATEGORIE_CHECK)
  return {
    isCategoriesPage,
    isLocationsPage: pathname === LOCATIONS_PATHNAME,
  }
}
