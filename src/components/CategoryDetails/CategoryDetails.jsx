import React from 'react'
import { Link } from 'react-router-dom'

import './category-details.css'

export const CategoryDetails = ({ activeCategory }) => {
  return (
    <section className="category-details d-flex flex-column">
      <div className="card">
        <div className="card-header">
          Category Name:
        </div>
        <div className="list-group-item">
          {activeCategory.name}
        </div>
      </div>
      <Link to="/" className="align-self-center mt-2">
        <button type="button" className="btn btn-primary">
          Back to list
        </button>
      </Link>
    </section>
  )
}
