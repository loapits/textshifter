/**
  * Reducer for the manipulations with the switching the theme.
  */
 
const SWITCH_THEME = 'SWITCH_THEME'

/**
 * Initializated state of theme reducer
 * 
 * @param {string} mode the theme mode
 */
const initialState: object = {
  mode: localStorage.getItem('mode') || 'light'
}

export const switchThemeReducer = (state = initialState, action: any): object => {
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
  * @param {string} mode first argument, which is mode the theme
  * @returns {string} the new mode of theme
  */
export const switchThemeCreator = (mode: string): object => ({type: SWITCH_THEME, mode})