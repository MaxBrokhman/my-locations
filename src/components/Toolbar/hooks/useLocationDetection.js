import { useLocation } from "react-router-dom"

import { 
  LOCATIONS_PATHNAME, 
  MAIN_PATHNAME, 
  URL_PREFIX, 
} from "../../App/config"

const CATEGORIE = 'categor'

export const useLocationDetection = () => {
  const { pathname } = useLocation()
  const isCategoriesPage = pathname === MAIN_PATHNAME 
    || pathname === URL_PREFIX
    || pathname.toLowerCase().includes(CATEGORIE)
  return {
    isCategoriesPage,
    isLocationsPage: pathname === LOCATIONS_PATHNAME,
  }
}
