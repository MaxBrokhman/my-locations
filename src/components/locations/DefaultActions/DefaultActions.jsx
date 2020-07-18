import React, { Fragment } from 'react'

import { useDefaultActions } from './hooks/useDefaultActions'
import { SORT_FIELD, DEFAULT_FILTER_FIELD } from './config'

import './default-actions.css'

export const DefaultActions = () => {
  const {
    categories,
    changeFilterHandler,
    sortBtnClickHandler,
    sortBtnStatusClass,
    filter,
  } = useDefaultActions()
  return (
    <Fragment>
      <div className="d-flex">
        <span className="location-sort-label ml-2 mr-2 mb-2 align-self-end">
          Sort by: 
        </span>
        <button 
          className={`btn btn-secondary sort-btn ml-2 ${sortBtnStatusClass}`}
          onClick={sortBtnClickHandler}
        >
          {SORT_FIELD}
        </button>
        <label className="category-filter-label ml-4 mr-2 mb-2 align-self-end" htmlFor="category-filter">
          Filter by category: 
        </label>
        <select 
          className="btn btn-secondary category-filter ml-2 mr-1 pl-1" 
          id="category-filter"
          onChange={changeFilterHandler}
          value={filter}
        >
          <option value="">{DEFAULT_FILTER_FIELD}</option>
          {
            categories.map((item) => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))
          }
        </select>
      </div>
    </Fragment>
  )
}
