import React, { useRef } from 'react'

import { useNewCategoryForm } from './hooks/useNewCategoryForm'
import { NewItemInputField } from '../NewItemInputField/NewItemInputField'
import { useNewItemFormSubmit } from './hooks/useNewItemFormSubmit'
import { createCategory } from '../../actions/actions'
import { useAppContext } from '../../reducer/reducer'
import { CATEGORIES_PATHNAME } from '../App/config'

import './new-category-form.css'

export const NewCategory = () => {
  let ref = useRef(null)
  const { state, dispatch } = useAppContext()
  const { nameHandler, name } = useNewCategoryForm(ref, 'name')
  const { submitHandler } = useNewItemFormSubmit({ 
    action: createCategory,
    data: state.newCategoryName,
    newUrl: CATEGORIES_PATHNAME,
    dispatch,
  })
  
  return (
    <form className="new-category-form" onSubmit={submitHandler}>
      <NewItemInputField
        changeHandler={nameHandler}
        field={'Category Name'}
        id={'new-category-name'}
        type="text" 
        value={name}
        ref={ref}
        caption={'Enter the name for a new location category.'}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
