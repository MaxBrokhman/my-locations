import { NEW_CATEGORY_PATHNAME, NEW_LOCATION_PATHNAME } from "../../App/config"

const CATEGORY = 'Category'
const LOCATION = 'Location'

export const useNewItem = (isCategoriesPage) => {
  const capture = isCategoriesPage
    ? CATEGORY
    : LOCATION
  const linkUrl = isCategoriesPage
    ? NEW_CATEGORY_PATHNAME 
    : NEW_LOCATION_PATHNAME

  return {
    capture,
    url: linkUrl,
  }
}
