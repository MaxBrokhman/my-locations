import React from 'react'

import { OutsideClick } from '../OutsideClick/OutsideClick'
import { useAppContext } from '../../reducer/reducer'

export const LocationsList = () => {
  const {state, dispatch} = useAppContext()
  console.log(state);
  return (
    <div className="locations-list d-flex flex-column flex-grow-1">
      <OutsideClick dispatch={dispatch}>
        <ul className="list-group">
          {
            state.locations.map((location) => (
              <li 
                className={`list-group-item categories-item`}
                key={location.id}
              >
                {location.name}
              </li>
            ))
          }
        </ul>
      </OutsideClick>
    </div>
  )
}
