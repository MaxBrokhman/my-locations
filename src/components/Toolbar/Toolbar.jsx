import React from 'react'

import { useAppContext } from '../../hooks/useAppContext'
import { EditCategory } from '../EditCategory/EditCategory'
import { ActionsPanel } from '../ActionsPanel/ActionsPanel'
import { useActions } from './hooks/useActions'
import { useCaption } from './hooks/useCaption'
import { DefaultActions } from '../DefaultActions/DefaultActions'
import { useLocationDetection } from './hooks/useLocationDetection'

import './toolbar.css'

export const Toolbar = () => {
  const { state, dispatch } = useAppContext()
  const { isCategoriesPage } = useLocationDetection()
  const { caption } = useCaption(state.activeItem, isCategoriesPage)
  const {
    editBtnHandler,
    isEditing,
    setEditing,
    deleteBtnHandler,
  } = useActions({
    dispatch, 
    isCategoriesPage,
    activeItem: state.activeItem,
    locations: state.locations,
  })
  return (
    <div 
      className="btn-group alert alert-secondary toolbar d-flex justify-content-between" 
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
          : <DefaultActions />
      }
    </div>
  )
}
