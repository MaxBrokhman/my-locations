import { createContext } from 'react'

const STORAGE_KEY = `${window.location.host}-${window.location.origin}-state`

const persistedState = localStorage.getItem(STORAGE_KEY)
const parsedState = persistedState && JSON.parse(persistedState)

export const initialState = parsedState || {
  categories: [],
  locations: [],
  activeItem: null,
  newCategoryName: '',
  filter: '',
  sort: 'asc'
}

const initialContext = {
  state: initialState,
  dispatch: null,
}

export const Context = createContext(initialContext)

const reducer = (state, action) => {
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
    case 'SET_ACTIVE_ITEM':
      return {
        ...state,
        activeItem: action.payload,
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((item) => item.id !== state.activeItem.id),
        locations: state.locations.map((location) => ({
          ...location,
          categories: location.categories.filter((item) => item.id !== state.activeItem.id),
        })),
        activeItem: null,
      }
    case 'UPDATE_ACTIVE_CATEGORY':
      const editedCategory = {
        ...state.activeItem,
        name: action.payload,
      }
      const idx = state.categories.findIndex((item) => item.id === editedCategory.id)
      return {
        ...state,
        activeItem: editedCategory,
        categories: [
          ...state.categories.slice(0, idx),
          editedCategory,
          ...state.categories.slice(idx + 1),
        ]
      }
    case 'ADD_NEW_LOCATION':
      return {
        ...state,
        locations: [
          ...state.locations,
          { ...action.payload },
        ]
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    case 'SET_SORT':
      return {
        ...state,
        sort: action.payload,
      }
    case 'UPDATE_LOCATION':
      const editedLocation = {
        ...state.activeItem,
        ...action.payload,
      }
      const locationIdx = state.locations.findIndex(
        (location) => location.id === editedLocation.id
      )
      return {
        ...state,
        locations: [
          ...state.locations.slice(0, locationIdx),
          editedLocation,
          ...state.locations.slice(locationIdx + 1)
        ],
        activeItem: editedLocation,
      }
    default:
      return {...state}
  }
}

export const persistReducer = (state, action) => {
  const newState = reducer(state, action)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  return newState
}
