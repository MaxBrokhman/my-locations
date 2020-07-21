import React from 'react'

import './location-categories-selection.css'

export const LocationCategoriesSelection = ({ 
  categories,
  locationCategories,
  checkHandler,
}) => (
  <div className="form-group category-selection-wrapper">
    <span className="d-block mb-2">Location Categories</span>
    {
        categories.map((category) => (
          <div className="form-check" key={category.id}>
            <input 
              className="form-check-input category-check-input" 
              type="checkbox" 
              value={category.id} 
              id={category.id} 
              name="categories"
              onChange={checkHandler}
              checked={locationCategories.includes(category.id) || undefined}
            />
            <label className="form-check-label category-check-label" htmlFor={category.id}>
              {category.name}
            </label>
          </div>
        ))
      }
    <small className="form-text text-muted">Choose one or more location category.</small>
  </div>
)
