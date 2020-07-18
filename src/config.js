const urlCheck = /\/\w/

export const URL_PREFIX = window.location.pathname.match(urlCheck) 
  ? window.location.pathname
  : ''

const UNIFIED_PREFIX = URL_PREFIX[URL_PREFIX.length - 1] === '/' 
? `${URL_PREFIX}`
: `${URL_PREFIX}/`

export const MAIN_PATHNAME = `${UNIFIED_PREFIX}`

export const CATEGORY_DETAILS_PATHNAME = `${UNIFIED_PREFIX}active-category`
export const NEW_CATEGORY_PATHNAME = `${UNIFIED_PREFIX}new-category`
export const LOCATIONS_PATHNAME = `${UNIFIED_PREFIX}locations`
export const NEW_LOCATION_PATHNAME = `${UNIFIED_PREFIX}new-location`
export const LOCATION_DETAILS_PATHNAME = `${UNIFIED_PREFIX}active-location`
export const LOCATION_EDITING_PATHNAME = `${UNIFIED_PREFIX}edit-location`

export const LOCATION_TYPE = 'location'
export const CATEGORY_TYPE = 'category'

export const ASCENDING_SORT = 'asc'
export const DESCENDING_SORT = 'desc'
