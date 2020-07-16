import React, { forwardRef } from 'react'

export const NewItemInputField = forwardRef(({
  field,
  id,
  type,
  changeHandler,
  value,
  caption,
}, ref) => (
  <div className="form-group">
    <label htmlFor={id}>{field}</label>
    <input 
      id={id}
      type={type}
      className="form-control"
      onChange={changeHandler}
      value={value}
      ref={ref}
    />
    <small className="form-text text-muted">{caption}</small>
  </div>
))
