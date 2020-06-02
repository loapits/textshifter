import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { editTextReducer } from './edit-text-reducer'

const redusers = combineReducers({
  edit: editTextReducer
})

export const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(),
))