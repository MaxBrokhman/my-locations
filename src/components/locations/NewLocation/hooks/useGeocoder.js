import { useEffect } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl'

import { MAP_TOKEN, MAP_CONTAINER_ID } from '../../Map/config'
import { MAPBOX_STYLES_URL, INITIAL_COORDS } from '../config'
import { coordinatesGeocoder } from '../utils'

mapboxgl.accessToken = MAP_TOKEN

export const useGeocoder = (updater, initialData) => {
  useEffect(() => {
    const initialCoords = initialData 
      ? initialData.coordinates
      : INITIAL_COORDS

    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: MAPBOX_STYLES_URL,
      center: initialCoords,
      zoom: 9,
    })
    
    const geocoder = new MapboxGeocoder({
      accessToken: MAP_TOKEN,
      mapboxgl: mapboxgl,
      localGeocoder: coordinatesGeocoder,
      reverseGeocode: true,
      trackProximity: false,
      proximity:'',
    })
    
    const geocoderHandler = ({ result }) => updater({
      coordinates: result.center,
      address: result.place_name,
    })

    const mapClickHandler = (evt) => geocoder.query(`${evt.lngLat.lng}, ${evt.lngLat.lat}`)

    const mapLoadHandler = () => {
      if (initialData) {
        new mapboxgl.Marker()
          .setLngLat(initialData.coordinates)
          .addTo(map)
        geocoder.setInput(initialData.address)
      }
    }

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map))
    geocoder.on('result', geocoderHandler)
    map.on('click', mapClickHandler)
    map.on('load', mapLoadHandler)

    return () => {
      geocoder.off('result', geocoderHandler)
      map.off('click', mapClickHandler)
      map.off('load', mapLoadHandler)
      map.remove()
    }
  }, [])
}
