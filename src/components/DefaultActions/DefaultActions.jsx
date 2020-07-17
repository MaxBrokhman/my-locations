import React, { Fragment } from 'react'

import { NewItemButton } from '../NewItemButton/NewItemButton'
import { useDefaultActions } from './hooks/useDefaultActions'

import './default-actions.css'

export const DefaultActions = () => {
  const {
    categories,
    changeFilterHandler,
    sortBtnClickHandler,
    sortBtnStatusClass,
  } = useDefaultActions()
  return (
    <Fragment>
      <div className="d-flex">
        <span className="location-sort-label">
          Sort by: 
        </span>
        <button 
          className={`btn btn-secondary sort-btn ${sortBtnStatusClass}`}
          onClick={sortBtnClickHandler}
        >
          Name
        </button>
        <label className="category-filter-label" htmlFor="category-filter">
          Filter by category: 
        </label>
        <select 
          className="btn btn-secondary category-filter" 
          id="category-filter"
          onChange={changeFilterHandler}
        >
          <option value="">No filter</option>
          {
            categories.map((item) => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <NewItemButton />
    </Fragment>
  )
}
