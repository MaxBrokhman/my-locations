import React, { useReducer } from 'react'
import { Switch, Route } from 'react-router-dom'

import { 
  persistReducer, 
  initialState, 
  Context,
} from '../../../reducer/reducer'
import { NewCategory } from '../../categories/NewCategory/NewCategory'
import { CategoryDetails } from '../../categories/CategoryDetails/CategoryDetails'
import { Header } from '../Header/Header'
import { 
  CATEGORY_DETAILS_PATHNAME, 
  NEW_CATEGORY_PATHNAME, 
  MAIN_PATHNAME,
  LOCATIONS_PATHNAME,
  NEW_LOCATION_PATHNAME,
  LOCATION_DETAILS_PATHNAME,
  LOCATION_EDITING_PATHNAME,
} from '../../../config'
import { Footer } from '../Footer/Footer'
import { NewLocation, EditableLocation } from '../../locations/NewLocation/NewLocation'
import { List } from '../List/List'
import { CategoriesItem } from '../../categories/CategoriesItem/CategoriesItem'
import { LocationItem } from '../../locations/LocationItem/LocationItem'
import { LocationDetails } from '../../locations/LocationDetails/LocationDetails'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'

import './app.css'

export const App = () => {
  const [state, dispatch] = useReducer(persistReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ErrorBoundary>
        <Header />
        <main className="container main-container d-flex justify-content-center">
          <Switch>
            <Route path={MAIN_PATHNAME} exact>
              <List list={state.categories} Component={CategoriesItem} />
            </Route>
            <Route path={LOCATIONS_PATHNAME}>
              <List list={state.locations} Component={LocationItem} />
            </Route>
            <Route path={NEW_CATEGORY_PATHNAME}>
              <NewCategory />
            </Route>
            <Route path={NEW_LOCATION_PATHNAME}>
              <NewLocation editableItem={null} />
            </Route>
            <Route path={CATEGORY_DETAILS_PATHNAME}>
              <CategoryDetails activeItem={state.activeCategory} />
            </Route>
            <Route path={LOCATION_DETAILS_PATHNAME}>
              <LocationDetails activeItem={state.activeLocation} />
            </Route>
            <Route path={LOCATION_EDITING_PATHNAME}>
              <EditableLocation activeItem={state.activeLocation} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </ErrorBoundary>
    </Context.Provider>
  )
}
