import { switchThemeType, ActionsTypes } from "../types/theme_types"
export const SWITCH_THEME = 'SWITCH_THEME'

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