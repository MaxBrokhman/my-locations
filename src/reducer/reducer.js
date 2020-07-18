import { createContext } from 'react'

import { CATEGORY_TYPE, ASCENDING_SORT } from '../config'

const STORAGE_KEY = `${window.location.host}-${window.location.origin}-mylocations-state`

const persistedState = localStorage.getItem(STORAGE_KEY)
const parsedState = persistedState && JSON.parse(persistedState)

export const initialState = parsedState || {
  categories: [],
  locations: [],
  activeCategory: null,
  activeLocation: null,
  filter: '',
  sort: ASCENDING_SORT,
  currentType: CATEGORY_TYPE,
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
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      }
    case 'SET_ACTIVE_LOCATION':
      return {
        ...state,
        activeLocation: action.payload,
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((item) => item.id !== state.activeCategory.id),
        locations: state.locations.map((location) => ({
          ...location,
          categories: location.categories.filter((item) => item !== state.activeCategory.id),
        })),
        activeCategory: null,
        filter: '',
      }
    case 'UPDATE_ACTIVE_CATEGORY':
      const editedCategory = {
        ...state.activeCategory,
        name: action.payload,
      }
      const idx = state.categories.findIndex((item) => item.id === editedCategory.id)
      return {
        ...state,
        activeCategory: editedCategory,
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
        ...state.activeLocation,
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
        activeLocation: editedLocation,
      }
    case 'DELETE_LOCATION':
      return {
        ...state,
        locations: state.locations.filter((item) => item.id !== state.activeLocation.id),
        activeLocation: null,
        filter: '',
      }
    default:
      return { ...state }
  }
}

export const persistReducer = (state, action) => {
  const newState = reducer(state, action)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  return newState
}
