import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { editTextReducer } from './edit-text-reducer'
import { switchThemeReducer } from './switch-theme-reducer'
import { logoReducer } from './logo-reducer'

export const redusers = combineReducers({
  edit: editTextReducer,
  theme: switchThemeReducer,
  logo: logoReducer
})

export const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(thunk)
))