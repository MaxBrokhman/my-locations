import React from 'react'
import { CategoriesItem } from '../CategoriesItem/CategoriesItem'
import { useAppContext } from '../../reducer/reducer'
import { setActiveCategory } from '../../actions/actions'

import './categories-list.css'

export const CategoriesList = ({ categories }) => {
  const {state, dispatch} = useAppContext()
  const itemClickHandler = (id) => () => state.activeCategory && id === state.activeCategory.id 
    ? setActiveCategory(null, dispatch)
    : setActiveCategory(
        state.categories.find((item) => item.id === id), 
        dispatch,
      )
  return (
    <div className="categories-list flex-grow-1">
      <ul className="list-group">
        {
          categories.map((item) => (
            <CategoriesItem 
              name={item.name} 
              key={item.id} 
              isActive={state.activeCategory && item.id === state.activeCategory.id}
              clickHandler={itemClickHandler(item.id)}
            />
          ))
        }
      </ul>
    </div>
  )
}
