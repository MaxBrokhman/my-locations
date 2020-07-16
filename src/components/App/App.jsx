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
} from '../../reducer/reducer'
import { CategoriesList } from '../CategoriesList/CategoriesList'
import { NewCategory } from '../NewCategory/NewCategory'
import { CategoryDetails } from '../CategoryDetails/CategoryDetails'
import { Header } from '../Header/Header'
import { 
  CATEGORY_DETAILS_PATHNAME, 
  NEW_CATEGORY_PATHNAME, 
  MAIN_PATHNAME,
  CATEGORIES_PATHNAME,
  LOCATIONS_PATHNAME,
  NEW_LOCATION_PATHNAME,
} from './config'
import { Footer } from '../Footer/Footer'
import { Locations } from '../Locations/Locations'
import { NewLocation } from '../NewLocation/NewLocation'

import './app.css'

export const App = () => {
  const [state, dispatch] = useReducer(persistReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Header />
      <main className="container main-container d-flex justify-content-center">
        <Switch>
          <Route path={CATEGORIES_PATHNAME}>
            {
              state.categories.length 
                ? <CategoriesList />
                : <h2 className="display-4 text-center list-heading align-self-center flex-1">
                    There is no categories yet
                  </h2>
            }
          </Route>
          <Route path={LOCATIONS_PATHNAME}>
            {
              state.locations.length 
                ? <Locations />
                : <h2 className="display-4 text-center list-heading align-self-center flex-1">
                    There is no locations yet
                  </h2>
            }
          </Route>
          <Route path={NEW_CATEGORY_PATHNAME}>
            <NewCategory />
          </Route>
          <Route path={NEW_LOCATION_PATHNAME}>
            <NewLocation />
          </Route>
          <Route path={CATEGORY_DETAILS_PATHNAME}>
            {
              state.activeCategory 
                ? <CategoryDetails activeCategory={state.activeCategory} />
                : <Redirect to={MAIN_PATHNAME} />
            }
          </Route>
        </Switch>
      </main>
      <Footer />
    </Context.Provider>
  )
}
