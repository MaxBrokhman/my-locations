import { useAppContext } from "../../../hooks/useAppContext"
import { setAciveItem } from "../../../actions/actions"

export const useActiveItem = (list) => {
  const {state, dispatch} = useAppContext()
  const itemClickHandler = (id) => 
    () => state.activeItem && id === state.activeItem.id 
      ? setAciveItem(null, dispatch)
      : setAciveItem(
          list.find((item) => item.id === id), 
          dispatch,
        )

  return {
    itemClickHandler,
    dispatch,
  }
}
