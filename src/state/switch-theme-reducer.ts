import { switchThemeType, ActionsTypes } from "../types/theme_types"
import { SWITCH_THEME } from "./types"

const initialState = {
  mode: localStorage.getItem('mode') || 'light' as string
}

export type themeInitialTypes = typeof initialState

export const switchThemeReducer = (state = initialState, action: ActionsTypes): themeInitialTypes => {
  switch (action.type) {
    case SWITCH_THEME: {
      return{
        ...state,
        mode: action.mode
      }
    }

    default: 
      return state
  }
}

export const switchThemeCreator = (mode: string): switchThemeType => ({type: SWITCH_THEME, mode})