import { NEW_CATEGORY_PATHNAME, NEW_LOCATION_PATHNAME } from "../../App/config"
import { useLocationDetection } from "../../Toolbar/hooks/useLocationDetection"
import { useAppContext } from "../../../hooks/useAppContext"

const CATEGORY = 'Category'
const LOCATION = 'Location'

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
    ? 'To create a new location you need to add at least one category first'
    : 'Create new item'

  return {
    capture,
    url: linkUrl,
    title,
    isDisabled,
  }
}
