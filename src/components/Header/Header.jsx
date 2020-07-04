import React from 'react'
import { Link } from 'react-router-dom'

import { MAIN_PATHNAME } from '../App/config'
import { Toolbar } from '../Toolbar/Toolbar'

import './header.css'

export const Header = () => (
  <header className="app-header">
    <div className="container">
        <h1 className="display-4 page-heading">
          <Link to={MAIN_PATHNAME}>
            myLocations
          </Link>
        </h1>
      <Toolbar />
    </div>
  </header>
)
