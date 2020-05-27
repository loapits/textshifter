import { keyboardLayoutReducer } from './keyboardLayout-reducer';
import { convertTextReducer } from './convert-reducer';
import { logoTextChangeReducer } from './logoTextChange-reducer';
import { themeChangeReducer } from './theme-reducer';
import { registerReducer } from './register-reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form';

const redusers = combineReducers({
  register: registerReducer,
  theme: themeChangeReducer,
  transliteration: themeChangeReducer,
  logoText: logoTextChangeReducer,
  convert: convertTextReducer,
  layout: keyboardLayoutReducer,
  form: formReducer
})

export const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(),
))