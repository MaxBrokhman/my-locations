import React, { useRef } from 'react'

import { NewItemNameInput } from '../../common/NewItemNameInput/NewItemNameInput'
import { Map } from '../Map/Map'
import { useNewLocation } from './hooks/useNewLocation'
import { FIELD } from './config'
import { withActiveItem } from '../../../hocs/withActiveItem'
import { LocationCategoriesSelection } from '../LocationCategoriesSelection/LocationCategoriesSelection'

import './new-location.css'

export const NewLocation = ({ activeItem }) => {
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
    editableItem: activeItem,
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
      <LocationCategoriesSelection 
        checkHandler={checkHandler} 
        locationCategories={locationCategories} 
        categories={categories} 
      />
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
    </form>
  )
}

export const EditableLocation = withActiveItem(NewLocation)
