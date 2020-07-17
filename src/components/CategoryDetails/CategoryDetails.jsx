import React from 'react'
import { Link } from 'react-router-dom'

import { CATEGORIES_PATHNAME } from '../App/config'

export const CategoryDetails = ({ activeCategory }) => (
  <section className="category-details d-flex flex-column">
    <div className="card">
      <div className="card-header">
        Category Name:
      </div>
      <div className="list-group-item">
        {activeCategory.name}
      </div>
    </div>
    <Link to={CATEGORIES_PATHNAME} className="align-self-center mt-2">
      <button type="button" className="btn btn-primary">
        To all categories
      </button>
    </Link>
  </section>
)
