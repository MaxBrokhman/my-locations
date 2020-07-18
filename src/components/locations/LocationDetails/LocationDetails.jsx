import React from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '../../../hooks/useAppContext'
import { LOCATIONS_PATHNAME } from '../../../config'
import { useMap } from '../Map/hooks/useMap'
import { Map } from '../Map/Map'

import './location-details.css'

export const LocationDetails = () => {
  const { state } = useAppContext()
  useMap(state.activeLocation.coordinates)
  
  return (
    <section className="location-details d-flex flex-column">
      <div className="card details-filed">
        <div className="card-header">
          Location Name:
        </div>
        <div className="list-group-item">
          {state.activeLocation.name}
        </div>
      </div>
      <div className="card details-filed">
        <div className="card-header">
          Location Address:
        </div>
        <div className="list-group-item">
          {state.activeLocation.address}
        </div>
      </div>
      <Map />
      <div className="card details-filed">
        <div className="card-header">
          Location Categories:
        </div>
        {
          state.activeLocation.categories.map((category) => {
            const foundCategory = state.categories.find((item) => item.id === category)
            if (foundCategory) {
              return (
                <div className="list-group-item" key={foundCategory.id}>
                  {foundCategory.name}
                </div>
              )
            }
          })
        }
      </div>
      <Link to={LOCATIONS_PATHNAME} className="align-self-center mt-2  details-filed">
        <button type="button" className="btn btn-primary">
          To all locations
        </button>
      </Link>
    </section>
  )
}
