import React from 'react'

import { MAIN_PATHNAME } from '../App/config'

import './error-boundary.css'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    
    this.btnClickHandler = this.btnClickHandler.bind(this)
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  btnClickHandler() {
    window.location.replace(MAIN_PATHNAME)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="overlay">
          <div className="alert alert-danger error-message" role="alert">
            <h4 className="alert-heading">Error!</h4>
            <p>Something went really wrong!</p>
            <hr />
            <p className="mb-0">We'll fix that ASAP, but for now please reload the page.</p>
            <hr />
            <button
              type="button" 
              className="btn btn-secondary"
              onClick={this.btnClickHandler}
            >
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }

}
