import React, { useRef } from 'react'

import { NewItemNameInput } from '../NewItemNameInput/NewItemNameInput'
import { useAppContext } from '../../hooks/useAppContext'
import { useNameInput } from '../../hooks/useNameInput'
import { useGeocoder } from './hooks/useGeocoder'
import { Map } from '../Map/Map'
import { useLocationCreation } from './hooks/useLocationCreation'
import { useFormSubmit } from './hooks/useFormSubmit'
import { useItemEditing } from './hooks/useItemEditing'

import './new-location.css'

const FIELD = 'Location'

export const NewLocation = ({ editableItem }) => {
  let nameRef = useRef(null)
  const { state, dispatch } = useAppContext()
  const { 
    location, 
    updater, 
    selectHandler,
  } = useLocationCreation(editableItem)
  let formRef = useRef(null)
  const { 
    initialName, 
    isEditing,
  } = useItemEditing(editableItem)
  const { changeHandler, name } = useNameInput(nameRef, initialName)
  const { submitHandler } = useFormSubmit({
    dispatch, 
    data: {
      ...location,
      name,
    },
    isEditing,
    formRef,
  })
  useGeocoder(updater, editableItem)
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
          value={location.categories}
          required
        >
          {
            state.categories.map((category) => (
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
