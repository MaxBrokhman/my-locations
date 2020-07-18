import React from 'react'

import { OutsideClick } from '../OutsideClick/OutsideClick'
import { useActiveItem } from './hooks/useActiveItem'
import { useLocationDetection } from '../Toolbar/hooks/useLocationDetection'
import { useFilteredList } from './hooks/useFilteredList'

export const List = ({ list, Component }) => {
  const { isCategoriesPage } = useLocationDetection()
  const { 
    dispatch, 
    itemClickHandler, 
    caption, 
  } = useActiveItem(list)
  const { sortedList, wrapperClassName } = useFilteredList({
    isCategories: isCategoriesPage,
    list,
  })
  return (
    <div className={`categories-list d-flex flex-column flex-grow-1 ${wrapperClassName}`}>
      {
        sortedList.length 
          ? (
            <OutsideClick dispatch={dispatch} isCategories={isCategoriesPage}>
              <ul className="list-group">
                {
                  sortedList.map((item) => (
                    <Component
                      clickHandler={itemClickHandler(item.id)}
                      item={item}
                      key={item.id} 
                    />
                  ))
                }
              </ul>
            </OutsideClick>
          )
          : (
            <h2 className="display-4 text-center list-heading align-self-center flex-1">
              There is no {caption} yet
            </h2>
          )
      }
      
    </div>
  )
}
