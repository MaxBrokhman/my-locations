import React, { useRef, useEffect } from 'react'

import { setAciveCategory, setActiveLocation } from '../../../actions/actions'
import { isElementInteractive } from './utils'

export const OutsideClick = ({ 
  children, 
  dispatch, 
  isCategories, 
}) => {
  let ref = useRef(null)
  useEffect(() => {
    const clickHandler = (evt) => {
      if (
        ref.current 
        && !ref.current.contains(evt.target) 
        && !evt.composedPath().some(isElementInteractive)
      ) {
        isCategories 
          ? setAciveCategory(null, dispatch)
          : setActiveLocation(null, dispatch)
      }
    }
    document.addEventListener('click', clickHandler)

    return () => document.removeEventListener('click', clickHandler)
  }, [dispatch, ref, isCategories])
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
