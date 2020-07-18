import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import { 
  MAP_TOKEN, 
  MAP_CONTAINER_ID, 
  DEFAULT_ZOOM, 
} from '../config';
import { MAPBOX_STYLES_URL } from '../../NewLocation/config';

mapboxgl.accessToken = MAP_TOKEN

export const useMap = (coords) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: MAPBOX_STYLES_URL,
      center: coords,
      zoom: DEFAULT_ZOOM,
    })
    new mapboxgl.Marker()
      .setLngLat(coords)
      .addTo(map)

    return () => map.remove() 
  }, [])
}
