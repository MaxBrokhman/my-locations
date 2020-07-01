import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './actions-panel.css'

export const ActionsPanel = ({ 
  editBtnHandler, 
  deleteBtnHandler,
}) => {
  const { pathname } = useLocation()
  return (
    <div className="d-flex">
      {
        pathname !== '/active-category' && (
          <Link to="/active-category">
            <button 
              type="button" 
              className="btn btn-success item-action-btn details-action"
            >
              Details
            </button>
          </Link>
        )
      }
      <button 
        type="button" 
        className="btn btn-warning item-action-btn edit-action"
        onClick={editBtnHandler}
      >
        Edit
      </button>
      <button 
        type="button" 
        className="btn btn-danger item-action-btn delete-action"
        onClick={deleteBtnHandler}
      >
        Delete
      </button>
    </div>
  )
}
