import React from 'react'

import { useItemSelection } from '../../../hooks/useItemSelection'

import './categories-item.css'

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
