import { useLocation } from "react-router-dom"

import { NEW_CATEGORY_PATHNAME, NEW_LOCATION_PATHNAME } from "../../App/config"

export const useNewItem = () => {
  const { pathname } = useLocation()
  const isCategoriesPage = pathname.toLowerCase().includes('categorie') 
  const capture = isCategoriesPage
    ? 'Category'
    : 'Location'
  const linkUrl = isCategoriesPage
    ? NEW_CATEGORY_PATHNAME 
    : NEW_LOCATION_PATHNAME

  return {
    capture,
    url: linkUrl,
  }
}
