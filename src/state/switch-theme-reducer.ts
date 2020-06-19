import { switchThemeType, ActionsTypes } from "../types/theme_types"
import { SWITCH_THEME } from "./types"

/**
 * Starting state of the `switchThemeReducer`.
 * 
 * `mode` - the mode of the theme.
 */
const initialState = {
  mode: localStorage.getItem('mode') || 'light' as string
}

/**
 * Returns `themeInitialTypes` which is a type of data in the `switchThemeReducer`.
 */
export type themeInitialTypes = typeof initialState

/**
 * `switchThemeReducer` which if missing type returns the state.
 * 
 * `SWITCH_THEME` - used for switching theme of application.
 * 
 */
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

/**
 * Action creator for `SWITCH_THEME` type.
 * 
 * @param mode the value which contains the mode of the  theme.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `mode` - the value which contains the mode of the theme.
 */
export const switchThemeCreator = (mode: string): switchThemeType => ({type: SWITCH_THEME, mode})