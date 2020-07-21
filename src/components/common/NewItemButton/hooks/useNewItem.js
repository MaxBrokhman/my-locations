import { NEW_CATEGORY_PATHNAME, NEW_LOCATION_PATHNAME } from "../../../../config"
import { useLocationDetection } from "../../../../hooks/useLocationDetection"
import { useAppContext } from "../../../../hooks/useAppContext"
import { 
  DEFAULT_TITLE, 
  DISABLED_TITLE, 
  CATEGORY, 
  LOCATION, 
} from "../config"

export const useNewItem = () => {
  const { state } = useAppContext()
  const { isCategoriesPage } = useLocationDetection()
  const capture = isCategoriesPage
    ? CATEGORY
    : LOCATION
  const linkUrl = isCategoriesPage
    ? NEW_CATEGORY_PATHNAME 
    : NEW_LOCATION_PATHNAME

  const isDisabled = !isCategoriesPage && !state.categories.length

  const title = isDisabled
    ? DISABLED_TITLE
    : DEFAULT_TITLE

  return {
    capture,
    url: linkUrl,
    title,
    isDisabled,
  }
}
