import React, { useRef } from 'react'

import { useNameInput } from '../../../hooks/useNameInput'
import { NewItemNameInput } from '../../common/NewItemNameInput/NewItemNameInput'
import { useNewCategoryFormSubmit } from './hooks/useNewCategoryFormSubmit'

import './new-category-form.css'

const FIELD = 'Category'

export const NewCategory = () => {
  let ref = useRef(null)
  const { changeHandler, name } = useNameInput(ref)
  const { submitHandler } = useNewCategoryFormSubmit(name)
  
  return (
    <form className="new-category-form" onSubmit={submitHandler}>
      <NewItemNameInput
        changeHandler={changeHandler}
        field={FIELD}
        value={name}
        ref={ref}
        required={true}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
