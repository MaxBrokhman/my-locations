import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import { MAP_TOKEN, MAP_CONTAINER_ID } from '../config';

mapboxgl.accessToken = MAP_TOKEN

export const useMap = (coords) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coords,
      zoom: 9,
    })
    new mapboxgl.Marker()
      .setLngLat(coords)
      .addTo(map)

    return () => map.remove() 
  }, [])
}
