import React from 'react'
import { Link } from 'react-router-dom'

import { useNewItem } from './hooks/useNewItem'
import { useLocationDetection } from '../Toolbar/hooks/useLocationDetection'

export const NewItemButton = () => {
  const { isCategoriesPage } = useLocationDetection()
  const { capture, url } = useNewItem(isCategoriesPage)
  return (
    <Link to={url}>
      <button type="button" className="btn btn-success item-action-btn add-action">
        Add New {capture}
      </button>
    </Link>
  )
}
