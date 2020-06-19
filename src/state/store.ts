import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { editTextReducer } from './edit-text-reducer'
import { switchThemeReducer } from './switch-theme-reducer'
import { logoReducer } from './logo-reducer'

/**
 * `redusers` - variable, in which combining all reducers from files:
 * switch-theme-redcer.ts, logo-reducer.ts and edit-text-reducer.ts.
 */
export const redusers = combineReducers({
  edit: editTextReducer,
  theme: switchThemeReducer,
  logo: logoReducer
})

/**
 * `store` - it global store of application. It turns out from `reducers` 
 * and with help method `createStore`. Method `createStore` also have `applyMiddleware`
 * the middleware. Example - thunks.
 */
export const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(thunk)
))