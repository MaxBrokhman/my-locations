import React from 'react'

import { OutsideClick } from '../OutsideClick/OutsideClick'
import { useActiveItem } from './hooks/useActiveItem'

export const List = ({ list, Component }) => {
  const { dispatch, itemClickHandler } = useActiveItem(list)
  return (
    <div className="categories-list d-flex flex-column flex-grow-1">
      <OutsideClick dispatch={dispatch}>
        <ul className="list-group">
          {
            list.map((item) => (
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
