import {switchRegisterType, ActionsTypes } from "../types/logo_types"
import { SWITCH_REGISTER } from "./types"

const initialState = {
  logotext: 'Textshifter' as string
}

export type logoInitialTypes = typeof initialState

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

export const switchRegisterCreator = (logotext: string): switchRegisterType => ({type: SWITCH_REGISTER, logotext})