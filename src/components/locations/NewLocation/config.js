export const MAPBOX_STYLES_URL = 'mapbox://styles/mapbox/streets-v11'
export const COORDS_REGEXP = /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
export const INITIAL_COORDS = [-74.5, 40]

export const ADDRESS_MESSAGE = 'Please, choose a place on the map.'
export const MESSAGE = 'Please, fill all the information.' 
export const COORDS = 'coordinates'
export const ADDRESS = 'address'
export const ID_FIELD = 'id'
export const GEOCODER_CLASS = 'geocoder'
export const FIELD = 'Location'

export const locationInitialState = {
  categories: [],
  coordinates: [],
  name: '',
  address: '',
  id: null,
} 
