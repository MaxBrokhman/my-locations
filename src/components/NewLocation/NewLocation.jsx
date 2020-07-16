import React, { useRef } from 'react'

import { NewItemInputField } from '../NewItemInputField/NewItemInputField'
import { useNewItemFormSubmit } from '../NewCategory/hooks/useNewItemFormSubmit'
import { addNewLocation } from '../../actions/actions'
import { useAppContext } from '../../reducer/reducer'
import { LOCATIONS_PATHNAME } from '../App/config'
import { useNewCategoryForm } from '../NewCategory/hooks/useNewCategoryForm'
import { useGeocoder } from './hooks/useGeocoder'
import { Map } from '../Map/Map'
import { useLocationCreation } from './hooks/useLocationCreation'

import './new-location.css'

export const NewLocation = () => {
  let nameRef = useRef(null)
  const { state, dispatch } = useAppContext()
  const { 
    location, 
    updater, 
    selectHandler,
  } = useLocationCreation()
  
  const { nameHandler, name } = useNewCategoryForm(nameRef, 'name')
  const { submitHandler } = useNewItemFormSubmit({
    action: addNewLocation,
    data: {
      ...location,
      name,
      id: new Date().getTime(),
    },
    dispatch,
    newUrl: LOCATIONS_PATHNAME,
  })
  useGeocoder(updater)
  return (
    <form className="new-category-form" onSubmit={submitHandler}>
      <NewItemInputField
        changeHandler={nameHandler}
        field={'Location Name'}
        id={'new-location-name'}
        type="text" 
        value={name}
        ref={nameRef}
        caption={'Enter the name for a new location.'}
      />
      <div className="form-group">
        <label htmlFor='new-location-address'>Location Address</label>
          <div id="geocoder" className="geocoder"></div>
        <small className="form-text text-muted">Enter the address for a new location.</small>
      </div>
      <Map />
      <select 
        className="form-control" 
        multiple 
        onChange={selectHandler}
      >
        {
          state.categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))
        }
      </select>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
