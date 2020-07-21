import React, { useRef } from 'react'
import { useOutsideClick } from './hooks/useOutsideClick'



export const OutsideClick = ({ children }) => {
  let ref = useRef(null)
  useOutsideClick(ref)
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
