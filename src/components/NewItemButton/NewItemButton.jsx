import React from 'react'
import { Link } from 'react-router-dom'

import { useNewItem } from './hooks/useNewItem'

export const NewItemButton = () => {
  const { 
    capture, 
    url,
    isDisabled,
    title,
  } = useNewItem()
  return (
    <Link to={url}>
      <button 
        type="button" 
        className="btn btn-success item-action-btn add-action"
        title={title}
        disabled={isDisabled}
      >
        Add New {capture}
      </button>
    </Link>
  )
}
