import { GEOCODER_CLASS, COORDS_REGEXP } from "./config"

export const findGeocoderInput = (elems) => {
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].className.includes(GEOCODER_CLASS)) {
      return elems[i]
    } 
  }
  return null
}

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

export const coordinatesGeocoder = (query) => {
  const matches = query.match(COORDS_REGEXP)
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
