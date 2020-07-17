import React from 'react'
import { Link } from 'react-router-dom'

import { useLocationDetection } from '../Toolbar/hooks/useLocationDetection'
import { useActivePath } from './hooks/useActivePath'

import './actions-panel.css'

export const ActionsPanel = ({ 
  editBtnHandler, 
  deleteBtnHandler,
}) => {
  const { isCategoriesPage } = useLocationDetection()
  const { activePath } = useActivePath(isCategoriesPage)
  return (
    <div className="d-flex">
      {
        activePath && (
          <Link to={activePath}>
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
