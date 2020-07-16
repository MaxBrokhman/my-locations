import React from 'react'

import { useAppContext } from '../../hooks/useAppContext'
import { NewItemButton } from '../NewItemButton/NewItemButton'
import { setFilter } from '../../actions/actions'

import './default-actions.css'

export const DefaultActions = () => {
  const { state, dispatch } = useAppContext()
  const changeHandler = (evt) => setFilter(evt.target.value, dispatch)
  return (
    <div className="d-flex">
      <label className="category-filter-label" htmlFor="category-filter">
        Filter by category: 
      </label>
        <select 
          className="category-filter" 
          id="category-filter"
          onChange={changeHandler}
        >
          <option value="">No filter</option>
          {
            state.categories.map((item) => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))
          }
        </select>
      <NewItemButton />
    </div>
  )
}
