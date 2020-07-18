export const createCategory = (name, dispatch) => dispatch({
  type: 'CREATE_CATEGORY',
  payload: { 
    name, 
    id: String(new Date().getTime()),
  },
})

export const setAciveCategory = (id, dispatch) => dispatch({
  type: 'SET_ACTIVE_CATEGORY',
  payload: id,
})

export const deleteCategory = (dispatch) => dispatch({
  type: 'DELETE_CATEGORY',
})

export const updateActiveCategory = (value, dispatch) => dispatch({
  type: 'UPDATE_ACTIVE_CATEGORY',
  payload: value,
})

export const createLocation = (location, dispatch) => dispatch({
  type: 'ADD_NEW_LOCATION',
  payload: {
    ...location,
    id: String(new Date().getTime()),
  },
})

export const setFilter = (filter, dispatch) => dispatch({
  type: 'SET_FILTER',
  payload: filter,
})

export const setSort = (sort, dispatch) => dispatch({
  type: 'SET_SORT',
  payload: sort,
})

export const updateLocation = (location, dispatch) => dispatch({
  type: 'UPDATE_LOCATION',
  payload: location,
})

export const deleteLocation = (dispatch) => dispatch({
  type: 'DELETE_LOCATION',
})

export const setActiveLocation = (id, dispatch) => dispatch({
  type: 'SET_ACTIVE_LOCATION',
  payload: id,
})

