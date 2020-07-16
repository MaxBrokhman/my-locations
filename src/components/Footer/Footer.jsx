import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES_PATHNAME, LOCATIONS_PATHNAME } from '../App/config'

import './footer.css'

export const Footer = () => (
  <footer className="app-footer">
    <div className="container">
      <div 
        className="alert alert-secondary btn-group d-flex justify-content-around m-0"
        role="group"
        aria-label="App screens switcher"
      >
        <Link to={LOCATIONS_PATHNAME}>
          <button type="button" className="btn btn-primary">Locations</button>
        </Link>
        <Link to={CATEGORIES_PATHNAME}>
          <button type="button" className="btn btn-primary">Categories</button>
        </Link>
      </div>
    </div>
  </footer>
)
