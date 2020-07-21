import React from 'react'
import { Link } from 'react-router-dom'

import { LOCATIONS_PATHNAME } from '../../../config'
import { Map } from '../Map/Map'
import { withActiveItem } from '../../../hocs/withActiveItem'
import { DetailsField } from '../../common/DetailsField/DetailsField'
import { LocationCategoriesList } from '../LocationCategoriesList/LocationCategoriesList'
import { useLocationDetails } from './hooks/useLocationDetails'

const LocationDetailsComponent = () => {
  const { categories, location } = useLocationDetails()
  return (
    <section className="location-details d-flex flex-column">
      <DetailsField label='Location Name:' caption={location.name} />
      <DetailsField label='Location Address:' caption={location.address} />
      <Map />
      <LocationCategoriesList 
        categories={categories} 
        locationCategories={location.categories} 
      />
      <Link to={LOCATIONS_PATHNAME} className="align-self-center mt-2 mb-2">
        <button type="button" className="btn btn-primary">
          To all locations
        </button>
      </Link>
    </section>
  )
}

export const LocationDetails = withActiveItem(LocationDetailsComponent)
