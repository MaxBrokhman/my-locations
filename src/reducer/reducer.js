import { createContext, useContext } from 'react'

export const initialState = {
  categories: [],
  activeCategory: null,
  newCategoryName: '',
}

const initialContext = {
  state: initialState,
  dispatch: null,
}

export const Context = createContext(initialContext)

export const useAppContext = () => useContext(Context)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CATEGORY':
      return {
        ...state,
        newCategoryName: '',
        categories: [
          ...state.categories,
          action.payload,
        ]
      }
    case 'ENTER_CATEGORY_NAME':
      return {
        ...state,
        newCategoryName: action.payload,
      }
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((item) => item.id !== state.activeCategory.id),
        activeCategory: null,
      }
    default:
      return {...state}
  }
}
