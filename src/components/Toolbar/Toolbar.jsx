import React from 'react'
import { Link } from 'react-router-dom'

import { EditCategory } from '../EditCategory/EditCategory'
import { ActionsPanel } from '../ActionsPanel/ActionsPanel'
import { useEditing } from './hooks/useEditing'
import { useCaption } from './hooks/useCaption'

import './toolbar.css'

export const Toolbar = ({ 
  activeItem,
  deleteBtnHandler,
}) => {
  const {
    editBtnHandler,
    isEditing,
    setEditing,
  } = useEditing()
  const { caption } = useCaption(activeItem)
  return (
    <div 
      className="btn-group alert alert-primary toolbar d-flex justify-content-between" 
      role="group" 
      aria-label="Category actions"
    >
      <div className="input-group-prepend toolbar-caption">
        <span className="input-group-text">
          {caption}
        </span>
      </div>
      {
        isEditing && activeItem && (
          <EditCategory 
            name={activeItem.name}
            setEditing={setEditing}
          />
        )
      }
      {
        activeItem 
          ? (
            <ActionsPanel 
              deleteBtnHandler={deleteBtnHandler} 
              editBtnHandler={editBtnHandler} 
            />
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
}
