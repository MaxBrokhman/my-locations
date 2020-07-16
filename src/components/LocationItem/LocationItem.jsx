import React from 'react'

import { useItemSelection } from '../../hooks/useItemSelection'

export const LocationItem = ({ item, clickHandler }) => {
  const { className } = useItemSelection(item.id)
  return (
    <li 
      className={className}
      onClick={clickHandler}
    >
      {item.name}
    </li>
  )
}
