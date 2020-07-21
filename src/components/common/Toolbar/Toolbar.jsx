import React from 'react'

import { EditCategory } from '../../categories/EditCategory/EditCategory'
import { ActionsPanel } from '../ActionsPanel/ActionsPanel'
import { DefaultActions } from '../../locations/DefaultActions/DefaultActions'
import { NewItemButton } from '../NewItemButton/NewItemButton'
import { useToolbar } from './hooks/useToolbar'
import { StatusCaption } from '../StatusCaption/StatusCaption'

import './toolbar.css'

export const Toolbar = () => {
  const {
    editBtnHandler,
    setEditing,
    deleteBtnHandler,
    caption,
    activeItem,
    isEditCategoryShown,
    isDefaultActionsShown,
  } = useToolbar()
  return (
    <div 
      className="btn-group alert alert-secondary toolbar d-flex justify-content-between" 
      role="group" 
      aria-label="Category actions"
    >
      <StatusCaption caption={caption} />
      {
        isEditCategoryShown && (
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
        isDefaultActionsShown && <DefaultActions />
      }
      {
        !activeItem && <NewItemButton />
      }
    </div>
  )
}
