import React from 'react'

import { CategoriesItem } from '../CategoriesItem/CategoriesItem'
import { OutsideClick } from '../OutsideClick/OutsideClick'
import { useActiveItem } from './hooks/useActiveItem'

export const CategoriesList = () => {
  const {
    activeCategory,
    categories,
    dispatch,
    itemClickHandler,
  } = useActiveItem()
  return (
    <div className="categories-list d-flex flex-column flex-grow-1">
      <OutsideClick dispatch={dispatch}>
        <ul className="list-group">
          {
            categories.map((item) => (
              <CategoriesItem 
                name={item.name} 
                key={item.id} 
                isActive={activeCategory && item.id === activeCategory.id}
                clickHandler={itemClickHandler(item.id)}
              />
            ))
          }
        </ul>
      </OutsideClick>
    </div>
  )
}
