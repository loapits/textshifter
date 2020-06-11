/**
  * Reducer for the manipulations with the switching the theme.
  */
 
const SWITCH_THEME = 'SWITCH_THEME'

const initialState = {
  mode: localStorage.getItem('mode') || 'light'
}

export const switchThemeReducer = (state = initialState, action: any) => {
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
  * Action creator what creating action for the switching the theme. 
  * 
  * Using in Header.tsx
  * 
  * @param {string} mode - first argument, which is mode the theme
  * @returns {string} return the new mode of theme
  */

export const switchThemeCreator = (mode: string) => ({type: SWITCH_THEME, mode})