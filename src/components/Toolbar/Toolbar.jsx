import React from 'react'

import { useAppContext } from '../../hooks/useAppContext'
import { EditCategory } from '../EditCategory/EditCategory'
import { ActionsPanel } from '../ActionsPanel/ActionsPanel'
import { useActions } from './hooks/useActions'
import { useCaption } from './hooks/useCaption'
import { NewItemButton } from '../NewItemButton/NewItemButton'

import './toolbar.css'

export const Toolbar = () => {
  const { state, dispatch } = useAppContext()
  const {
    editBtnHandler,
    isEditing,
    setEditing,
    deleteBtnHandler,
  } = useActions(dispatch)
  const { caption } = useCaption(state.activeItem)
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
        isEditing && state.activeItem && (
          <EditCategory setEditing={setEditing} />
        )
      }
      {
        state.activeItem 
          ? <ActionsPanel 
            deleteBtnHandler={deleteBtnHandler} 
            editBtnHandler={editBtnHandler} 
          />
          : <NewItemButton />
      }
    </div>
  )
}
