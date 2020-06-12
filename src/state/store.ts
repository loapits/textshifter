import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { editTextReducer } from './edit-text-reducer'
import { switchThemeReducer } from './switch-theme-reducer'
import { logoReducer } from './logo-reducer'

/**
 * All reducers which combined using combineReducers.
 */
export const redusers = combineReducers({
  edit: editTextReducer,
  theme: switchThemeReducer,
  logo: logoReducer
})

/**
 * export object store, which created using createStore.
 * 
 * @param {object} redicers it a reducers, which was create using combineReducers
 * @param {object} reduxDevtools using for better tracking state of the application
 *                               it takes middleware and some another parameter
 */
export const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(thunk)
))