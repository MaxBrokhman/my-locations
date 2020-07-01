import React, { useReducer } from 'react'
import {
  Switch, 
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import { 
  reducer, 
  initialState, 
  Context,
} from '../../reducer/reducer'
import { Toolbar } from '../Toolbar/Toolbar'
import { CategoriesList } from '../CategoriesList/CategoriesList'
import { NewCategory } from '../NewCategory/NewCategory'
import { useNameInputHandler, useToolbarHandlers } from './hooks'
import { CategoryDetails } from '../CategoryDetails/CategoryDetails'

import './app.css'

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { nameInputHandler, submitNameHandler } = useNameInputHandler(state.newCategoryName, dispatch)
  const {deleteBtnHandler} = useToolbarHandlers(dispatch)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <header>
        <div className="container">
            <h1 className="display-4 page-heading">
              <Link to="/">
                myLocations
              </Link>
            </h1>
          <Toolbar 
            activeItem={state.activeCategory}
            deleteBtnHandler={deleteBtnHandler} 
          />
        </div>
      </header>
      <div className="container main-container d-flex justify-content-center">
        <Switch>
          <Route path="/" exact>
            {
              state.categories.length 
                ? <CategoriesList />
                : <h2 className="display-4 text-center categories-heading align-self-center">
                    There is no categories yet
                  </h2>
            }
          </Route>
          <Route path="/new-category">
            <NewCategory 
              nameInputHandler={nameInputHandler} 
              name={state.newCategoryName} 
              submitNameHandler={submitNameHandler}
            />
          </Route>
          <Route path="/active-category">
            {
              state.activeCategory 
                ? <CategoryDetails activeCategory={state.activeCategory} />
                : <Redirect to="/" />
            }
          </Route>
        </Switch> 
      </div>
    </Context.Provider>
  )
}
