import { useEffect } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl'

import { MAP_TOKEN, MAP_CONTAINER_ID } from '../../Map/config'

mapboxgl.accessToken = MAP_TOKEN

const COORDS_REG = /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i

const coordinateFeature = (lng, lat) => ({
  center: [lng, lat],
  geometry: {
    type: 'Point',
    coordinates: [lng, lat]
  },
  place_name: `Lat: ${lat} Lng: ${lng}`,
  place_type: ['coordinate'],
  properties: {},
  type: 'Feature'
})

const coordinatesGeocoder = (query) => {
  const matches = query.match(COORDS_REG)
  if (!matches) return null
  const coord1 = Number(matches[1])
  const coord2 = Number(matches[2])
  const geocodes = []
  if (coord1 < -90 || coord1 > 90) {
    // must be lng, lat
    geocodes.push(coordinateFeature(coord1, coord2));
  }
  if (coord2 < -90 || coord2 > 90) {
    // must be lat, lng
    geocodes.push(coordinateFeature(coord2, coord1));
  }
  if (geocodes.length === 0) {
    // else could be either lng, lat or lat, lng
    geocodes.push(coordinateFeature(coord1, coord2));
    geocodes.push(coordinateFeature(coord2, coord1));
  }

  return geocodes
}

export const useGeocoder = (updater) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    })
    const geocoder = new MapboxGeocoder({
      accessToken: MAP_TOKEN,
      mapboxgl: mapboxgl,
      localGeocoder: coordinatesGeocoder,
    })
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map))
    geocoder.on('result', ({ result }) => {
      updater({
        coordinates: result.center,
        address: result.place_name,
      })
   })
  }, [])
}
