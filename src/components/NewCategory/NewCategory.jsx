import React from 'react'

import './new-category-form.css'

export const NewCategory = ({
  name, 
  nameInputHandler,
  submitNameHandler,
}) => (
  <form className="new-category-form" onSubmit={submitNameHandler}>
    <div className="form-group">
      <label htmlFor="new-category-name">Category Name</label>
      <input 
        id="new-category-name" 
        type="text" 
        className="form-control"
        onChange={nameInputHandler}
        value={name}
      />
      <small className="form-text text-muted">Enter the name for a new location category.</small>
    </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>
)
