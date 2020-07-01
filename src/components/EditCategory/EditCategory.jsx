import React, { useRef, useEffect } from 'react'

import { useEditForm } from './hooks'

export const EditCategory = ({ 
  name, 
  setEditing, 
}) => {
  const {
    editInputHandler, 
    editedName,
    submitEditHandler,
    cancelHandler,
  } = useEditForm({
    name,
    setEditing,
  })
  let ref = useRef(null)
  useEffect(() => {
    ref.current.focus()
    return () => setEditing(false)
  }, [setEditing])
  return (
    <form className="input-group category-name-edit" onSubmit={submitEditHandler}>
      <div className="input-group-prepend">
        <span className="input-group-text">Edit Category Name</span>
      </div>
      <input 
        type="text" 
        className="form-control" 
        aria-label="Category name input" 
        value={editedName}
        onChange={editInputHandler}
        ref={ref}
      />
      <div className="input-group-append">
        <button 
          className="btn btn-outline-success"
          type="submit"
        >
          Confirm
        </button>
        <button 
          className="btn btn-outline-danger"
          type="submit"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
