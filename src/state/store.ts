
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const redusers = combineReducers({
  
})

export const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(),
))