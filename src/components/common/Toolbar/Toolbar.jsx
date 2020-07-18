import React from 'react'

import { useAppContext } from '../../../hooks/useAppContext'
import { EditCategory } from '../../categories/EditCategory/EditCategory'
import { ActionsPanel } from '../ActionsPanel/ActionsPanel'
import { useActions } from './hooks/useActions'
import { useCaption } from './hooks/useCaption'
import { DefaultActions } from '../../locations/DefaultActions/DefaultActions'
import { useLocationDetection } from './hooks/useLocationDetection'
import { NewItemButton } from '../NewItemButton/NewItemButton'

import './toolbar.css'

export const Toolbar = () => {
  const { state, dispatch } = useAppContext()
  const { 
    isCategoriesPage, 
    isLocationsPage,
  } = useLocationDetection()
  const activeItem = isCategoriesPage 
    ? state.activeCategory 
    : state.activeLocation
  const { caption } = useCaption(activeItem, isCategoriesPage)
  const {
    editBtnHandler,
    isEditing,
    setEditing,
    deleteBtnHandler,
  } = useActions({
    dispatch, 
    isCategoriesPage,
    activeItem: activeItem,
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
        isEditing && activeItem && (
          <EditCategory setEditing={setEditing} />
        )
      }
      {
        activeItem && <ActionsPanel 
            deleteBtnHandler={deleteBtnHandler} 
            editBtnHandler={editBtnHandler} 
          />
      }
      {
        !activeItem && isLocationsPage && <DefaultActions />
      }
      {
        !activeItem && <NewItemButton />
      }
    </div>
  )
}
