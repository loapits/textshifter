import {switchRegisterType, ActionsTypes } from '../types/logo_types'
import { SWITCH_REGISTER } from './types'

/**
 * Starting state of the `logoReducer`.
 * 
 * `logotext` - the text of the logo.
 */
const initialState = {
  logotext: 'Textshifter' as string
}

/**
 * Returns `logoInitialTypes` which is a type of data in the `logoReducer`.
 */
export type logoInitialTypes = typeof initialState

/**
 * `logoReducer` which if missing type returns the state.
 * 
 * `SWITCH_REGISTER` - used for switching register of logo text.
 * 
 */
export const logoReducer = (state = initialState, action: ActionsTypes): logoInitialTypes => {
  switch (action.type) {
    case SWITCH_REGISTER: {
      return {
        ...state,
        logotext: action.logotext
      }
    }
    default: 
      return state
  }
}

/**
 * Action creator for `SWITCH_REGISTER` type.
 * 
 * @param logotext the value which contains the was entered text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `logotext` - a value in which contains the text of the logo.
 */
export const switchRegisterCreator = (logotext: string): switchRegisterType => ({type: SWITCH_REGISTER, logotext})