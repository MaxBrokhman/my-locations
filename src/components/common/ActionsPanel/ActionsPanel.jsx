import React from 'react'
import { Link } from 'react-router-dom'

import { useActivePath } from './hooks/useActivePath'

import './actions-panel.css'

export const ActionsPanel = ({ editBtnHandler, deleteBtnHandler }) => {
  const { activePath, isEditable } = useActivePath()
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
      {
        isEditable && (
          <button 
            type="button" 
            className="btn btn-warning item-action-btn edit-action ml-2"
            onClick={editBtnHandler}
          >
            Edit
          </button>
        )
      }
      <button 
        type="button" 
        className="btn btn-danger item-action-btn delete-action ml-2"
        onClick={deleteBtnHandler}
      >
        Delete
      </button>
    </div>
  )
}
