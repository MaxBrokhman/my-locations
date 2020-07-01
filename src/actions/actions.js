export const createCategory = (name, dispatch) => dispatch({
  type: 'CREATE_CATEGORY',
  payload: { 
    name, 
    id: new Date().getTime(),
  },
})

export const enterCategoryName = (name, dispatch) => dispatch({
  type: 'ENTER_CATEGORY_NAME',
  payload: name,
})

export const setActiveCategory = (id, dispatch) => dispatch({
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
