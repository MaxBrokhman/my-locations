import { useEffect } from "react"

import { useAppContext } from "../../../../hooks/useAppContext"
import { useLocationDetection } from "../../Toolbar/hooks/useLocationDetection"
import { isElementInteractive } from '../utils'
import { setAciveCategory, setActiveLocation } from "../../../../actions/actions"

export const useOutsideClick = (ref) => {
  const { dispatch } = useAppContext()
  const { isCategoriesPage } = useLocationDetection()
  useEffect(() => {
    const clickHandler = (evt) => {
      if (
        ref.current 
        && !ref.current.contains(evt.target) 
        && !evt.composedPath().some(isElementInteractive)
      ) {
        isCategoriesPage 
          ? setAciveCategory(null, dispatch)
          : setActiveLocation(null, dispatch)
      }
    }
    document.addEventListener('click', clickHandler)

    return () => document.removeEventListener('click', clickHandler)
  }, [dispatch, ref, isCategoriesPage])
}
