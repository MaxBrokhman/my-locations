import React, { useRef } from 'react'

import { NewItemNameInput } from '../../common/NewItemNameInput/NewItemNameInput'
import { Map } from '../Map/Map'
import { useNewLocation } from './hooks/useNewLocation'
import { FIELD } from './config'

import './new-location.css'

export const NewLocation = ({ editableItem }) => {
  let nameRef = useRef(null)
  let formRef = useRef(null)

  const {
    categories,
    changeHandler,
    locationCategories,
    name,
    checkHandler,
    submitHandler,
  } = useNewLocation({
    nameRef, 
    formRef,
    editableItem,
  })

  return (
    <form className="new-category-form" ref={formRef}>
      <NewItemNameInput
        changeHandler={changeHandler}
        field={FIELD}
        value={name}
        ref={nameRef}
      />
      <div className="form-group">
        <label htmlFor='new-location-address'>Location Address</label>
        <div id="geocoder" className="geocoder"></div>
        <small className="form-text text-muted">Enter the address or coordinates for a new location or choose a place by clicking on the map.</small>
      </div>
      <Map />
      <div className="form-group category-selection-wrapper">
        <span className="d-block mb-2">Location Categories</span>
        {
            categories.map((category) => (
              <div className="form-check" key={category.id}>
                <input 
                  className="form-check-input category-check-input" 
                  type="checkbox" 
                  value={category.id} 
                  id={category.id} 
                  name="categories"
                  onChange={checkHandler}
                  checked={locationCategories.includes(category.id)}
                />
                <label className="form-check-label category-check-label" htmlFor={category.id}>
                  {category.name}
                </label>
              </div>
            ))
          }
        <small className="form-text text-muted">Choose one or more location category.</small>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
    </form>
  )
}
