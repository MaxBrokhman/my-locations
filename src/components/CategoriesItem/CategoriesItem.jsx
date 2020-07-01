import React from 'react'

import './categories-item.css'

export const CategoriesItem = ({ 
  name, 
  clickHandler, 
  isActive,
}) => (
  <li 
    className={`list-group-item categories-item ${isActive ? 'active' : ''}`}
    onClick={clickHandler}
  >
    {name}
  </li>
)
