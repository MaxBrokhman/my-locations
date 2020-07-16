import React from 'react'

import { OutsideClick } from '../OutsideClick/OutsideClick'
import { useActiveItem } from './hooks/useActiveItem'
import { useLocationDetection } from '../Toolbar/hooks/useLocationDetection'
import { useFilteredList } from './hooks/useFilteredList'

export const List = ({ list, Component }) => {
  const { isCategoriesPage } = useLocationDetection()
  const { dispatch, itemClickHandler } = useActiveItem(list)
  const { filteredList } = useFilteredList({
    isCategories: isCategoriesPage,
    list,
  })
  return (
    <div className="categories-list d-flex flex-column flex-grow-1">
      <OutsideClick dispatch={dispatch}>
        <ul className="list-group">
          {
            filteredList.map((item) => (
              <Component
                clickHandler={itemClickHandler(item.id)}
                item={item}
                key={item.id} 
              />
            ))
          }
        </ul>
      </OutsideClick>
    </div>
  )
}
