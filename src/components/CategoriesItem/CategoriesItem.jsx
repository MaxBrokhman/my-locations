import React from 'react'

import './categories-item.css'
import { useItemSelection } from '../../hooks/useItemSelection'

export const CategoriesItem = ({ item, clickHandler }) => {
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
