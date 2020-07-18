import React from 'react'

import { useItemSelection } from '../../../hooks/useItemSelection'
import { useCategories } from './hooks/useCategories'

import './location-item.css'

export const LocationItem = ({ item, clickHandler }) => {
  const { className } = useItemSelection(item.id)
  const { categories } = useCategories(item.categories)
  return (
    <li 
      className={`${className} d-flex justify-content-between`}
      onClick={clickHandler}
    >
      <div className="category-badge-container">
        {item.name}
      </div>
      <div className="category-badge-container">
        {
          categories.map((item) => (
            <span 
              className="badge badge-pill badge-dark category-badge"
              key={item.id}
            >
              {item.name}
            </span>
          ))
        }
      </div>
    </li>
  )
}
