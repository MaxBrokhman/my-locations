import React from 'react'
import { Link } from 'react-router-dom'

import { MAIN_PATHNAME, LOCATIONS_PATHNAME } from '../App/config'
import { useCategoryDetails } from './hooks/useCategoryDetails'

export const CategoryDetails = () => {
  const { toLocationsClickHandler, name } = useCategoryDetails()
  return (
    <section className="category-details d-flex flex-column">
      <div className="card">
        <div className="card-header">
          Category Name:
        </div>
        <div className="list-group-item">
          {name}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link 
          to={LOCATIONS_PATHNAME} 
          className="align-self-center mt-3" 
          onClick={toLocationsClickHandler}
        >
          <button type="button" className="btn btn-primary">
            See all related locations
          </button>
        </Link>
        <Link to={MAIN_PATHNAME} className="align-self-center mt-3 ml-3">
          <button type="button" className="btn btn-outline-primary">
            To all categories
          </button>
        </Link>
      </div>
    </section>
  )
}
