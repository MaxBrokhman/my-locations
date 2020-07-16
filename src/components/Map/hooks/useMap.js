import mapboxgl from 'mapbox-gl'; 
import { useEffect } from 'react'

import { MAP_TOKEN, MAP_CONTAINER_ID } from '../config';

mapboxgl.accessToken = MAP_TOKEN

export const useMap = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    })
  }, [])
}
