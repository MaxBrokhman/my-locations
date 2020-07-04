import React from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '../../reducer/reducer'
import { EditCategory } from '../EditCategory/EditCategory'
import { ActionsPanel } from '../ActionsPanel/ActionsPanel'
import { useActions } from './hooks/useActions'
import { useCaption } from './hooks/useCaption'
import { NEW_CATEGORY_PATHNAME } from '../App/config'

import './toolbar.css'

export const Toolbar = () => {
  const { state, dispatch } = useAppContext()
  const {
    editBtnHandler,
    isEditing,
    setEditing,
    deleteBtnHandler,
  } = useActions(dispatch)
  const { caption } = useCaption(state.activeCategory)
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
        isEditing && state.activeCategory && (
          <EditCategory setEditing={setEditing} />
        )
      }
      {
        state.activeCategory 
          ? (
            <ActionsPanel 
              deleteBtnHandler={deleteBtnHandler} 
              editBtnHandler={editBtnHandler} 
            />
          )
          : (
            <Link to={NEW_CATEGORY_PATHNAME}>
              <button type="button" className="btn btn-success item-action-btn add-action">
                Add New Category
              </button>
            </Link>
          )
      }
    </div>
  )
}
