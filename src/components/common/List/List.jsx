import React from 'react'

import { OutsideClick } from '../OutsideClick/OutsideClick'
import { useList } from './hooks/useList'

export const List = ({ list, Component }) => {
  const {
    caption,
    itemClickHandler,
    sortedList,
    wrapperClassName,
  } = useList(list)
  return (
    <div className={`categories-list d-flex flex-column flex-grow-1 ${wrapperClassName}`}>
      {
        sortedList.length 
          ? (
            <OutsideClick>
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
