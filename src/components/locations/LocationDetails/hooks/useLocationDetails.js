import { useAppContext } from "../../../../hooks/useAppContext"
import { useMap } from "../../Map/hooks/useMap"

export const useLocationDetails = () => {
  const { state } = useAppContext()
  useMap(state.activeLocation.coordinates)

  return {
    location: state.activeLocation,
    categories: state.categories,
  }
}
