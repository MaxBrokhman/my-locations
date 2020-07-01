import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import './toolbar.css'

export const Toolbar = ({ 
  activeItem,
  deleteBtnHandler,
}) => (
  <div className="btn-group alert alert-primary toolbar" role="group" aria-label="Basic example">
    <div className="input-group-prepend toolbar-caption">
      <span className="input-group-text">
        {
          activeItem 
            ? activeItem.name 
            : 'Categories'
        }
      </span>
    </div>
    {
      activeItem 
        ? (
          <Fragment>
            <button 
              type="button" 
              className="btn btn-success item-action-btn details-action"
            >
              Details
            </button>
            <button 
              type="button" 
              className="btn btn-warning item-action-btn edit-action"
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
          </Fragment>
        )
        : (
          <Link to="/new-category">
            <button type="button" className="btn btn-success item-action-btn add-action">
              Add New Category
            </button>
          </Link>
        )
    }
  </div>
)
