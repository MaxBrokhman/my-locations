import React, { useReducer } from 'react'
import {
  Switch, 
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import { 
  persistReducer, 
  initialState, 
  Context,
} from '../../reducer/reducer'
import { Toolbar } from '../Toolbar/Toolbar'
import { CategoriesList } from '../CategoriesList/CategoriesList'
import { NewCategory } from '../NewCategory/NewCategory'
import { CategoryDetails } from '../CategoryDetails/CategoryDetails'
import { 
  CATEGORY_DETAILS_PATHNAME, 
  NEW_CATEGORY_PATHNAME, 
  MAIN_PATHNAME,
} from './config'
import { useToolbarHandlers } from './hooks/useToolbarHandlers'

import './app.css'

export const App = () => {
  const [state, dispatch] = useReducer(persistReducer, initialState)
  const { deleteBtnHandler } = useToolbarHandlers(dispatch)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <header>
        <div className="container">
            <h1 className="display-4 page-heading">
              <Link to={MAIN_PATHNAME}>
                myLocations
              </Link>
            </h1>
          <Toolbar 
            activeItem={state.activeCategory}
            deleteBtnHandler={deleteBtnHandler} 
          />
        </div>
      </header>
      <main className="container main-container d-flex justify-content-center">
        <Switch>
          <Route path={MAIN_PATHNAME} exact>
            {
              state.categories.length 
                ? <CategoriesList />
                : <h2 className="display-4 text-center categories-heading align-self-center">
                    There is no categories yet
                  </h2>
            }
          </Route>
          <Route path={NEW_CATEGORY_PATHNAME}>
            <NewCategory />
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
    </Context.Provider>
  )
}
