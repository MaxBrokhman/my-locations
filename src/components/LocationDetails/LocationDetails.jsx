import React from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '../../hooks/useAppContext'
import { LOCATIONS_PATHNAME } from '../App/config'
import { useMap } from '../Map/hooks/useMap'
import { Map } from '../Map/Map'

import './location-details.css'

export const LocationDetails = () => {
  const { state } = useAppContext()
  useMap(state.activeItem.coordinates)
  return (
    <section className="location-details d-flex flex-column">
      <div className="card details-filed">
        <div className="card-header">
          Location Name:
        </div>
        <div className="list-group-item">
          {state.activeItem.name}
        </div>
      </div>
      <div className="card details-filed">
        <div className="card-header">
          Location Address:
        </div>
        <div className="list-group-item">
          {state.activeItem.address}
        </div>
      </div>
      <Map />
      <Link to={LOCATIONS_PATHNAME} className="align-self-center mt-2  details-filed">
        <button type="button" className="btn btn-primary">
          To all locations
        </button>
      </Link>
    </section>
  )
}
