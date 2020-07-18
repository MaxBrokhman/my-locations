import React, { useRef } from 'react'

import { useEditForm } from './hooks/useEditForm'

export const EditCategory = ({ setEditing }) => {
  let ref = useRef(null)
  const {
    editInputHandler, 
    editedName,
    submitEditHandler,
    cancelHandler,
  } = useEditForm({ inputRef: ref, setEditing })
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
        required
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
