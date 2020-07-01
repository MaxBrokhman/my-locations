import React, { useRef, useEffect } from 'react'

import { setActiveCategory } from '../../actions/actions'
import { isElementInteractive } from './utils'

export const OutsideClick = ({ children, dispatch }) => {
  let ref = useRef(null)
  useEffect(() => {
    const clickHandler = (evt) => {
      if (
        ref.current 
        && !ref.current.contains(evt.target) 
        && !evt.composedPath().some(isElementInteractive)
      ) {
        setActiveCategory(null, dispatch)
      }
    }
    document.addEventListener('click', clickHandler)

    return () => document.removeEventListener('click', clickHandler)
  }, [dispatch, ref])
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
