const urlCheck = /\/\w/

const URL_PREFIX = window.location.pathname.match(urlCheck) 
  ? window.location.pathname
  : ''

export const MAIN_PATHNAME = `${URL_PREFIX}`
export const CATEGORY_DETAILS_PATHNAME = `${URL_PREFIX}active-category`
export const NEW_CATEGORY_PATHNAME = `${URL_PREFIX}new-category`
