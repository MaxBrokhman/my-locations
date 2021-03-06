import React, { forwardRef } from 'react'

export const NewItemNameInput = forwardRef(({
  field,
  changeHandler,
  value,
  required,
}, ref) => {
  const id = `new-${field.toLowerCase()}-name`
  return (
    <div className="form-group">
      <label htmlFor={id}>{field} Name</label>
      <input 
        id={id}
        type='text'
        className="form-control"
        onChange={changeHandler}
        value={value}
        ref={ref}
        name='name'
        required={required}
      />
      <small className="form-text text-muted">{`Enter the name for a new ${field}.`}</small>
    </div>
  )
})
