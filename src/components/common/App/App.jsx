import React, { useReducer } from 'react'
import {
  Switch, 
  Route,
  Redirect,
} from 'react-router-dom'

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
import { NewLocation } from '../../locations/NewLocation/NewLocation'
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
              {
                state.categories.length 
                  ? <List list={state.categories} Component={CategoriesItem} />
                  : <h2 className="display-4 text-center list-heading align-self-center flex-1">
                      There is no categories yet
                    </h2>
              }
            </Route>
            <Route path={LOCATIONS_PATHNAME}>
              {
                state.locations.length 
                  ? <List list={state.locations} Component={LocationItem} />
                  : <h2 className="display-4 text-center list-heading align-self-center flex-1">
                      There is no locations yet
                    </h2>
              }
            </Route>
            <Route path={NEW_CATEGORY_PATHNAME}>
              <NewCategory />
            </Route>
            <Route path={NEW_LOCATION_PATHNAME}>
              <NewLocation editableItem={null} />
            </Route>
            <Route path={CATEGORY_DETAILS_PATHNAME}>
              {
                state.activeCategory 
                  ? <CategoryDetails />
                  : <Redirect to={MAIN_PATHNAME} />
              }
            </Route>
            <Route path={LOCATION_DETAILS_PATHNAME}>
              {
                state.activeLocation 
                  ? <LocationDetails />
                  : <Redirect to={MAIN_PATHNAME} />
              }
            </Route>
            <Route path={LOCATION_EDITING_PATHNAME}>
              {
                state.activeLocation 
                  ? <NewLocation editableItem={state.activeLocation} />
                  : <Redirect to={MAIN_PATHNAME} />
              }
            </Route>
          </Switch>
        </main>
        <Footer />
      </ErrorBoundary>
    </Context.Provider>
  )
}
