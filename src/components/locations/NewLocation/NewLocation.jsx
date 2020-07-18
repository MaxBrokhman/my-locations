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
    selectHandler,
    submitHandler,
  } = useNewLocation({
    nameRef, 
    formRef,
    editableItem,
  })

  return (
    <form 
      className="new-category-form" 
      onSubmit={submitHandler} 
      ref={formRef}
    >
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
      <div className="form-group">
        <label htmlFor='new-location-address'>Location Categories</label>
        <select 
          className="form-control" 
          multiple 
          onChange={selectHandler}
          value={locationCategories}
          required
        >
          {
            categories.map((category) => (
              <option 
                key={category.id} 
                value={category.id}
              >
                {category.name}
              </option>
            ))
          }
        </select>
        <small className="form-text text-muted">Choose one or more location category.</small>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
