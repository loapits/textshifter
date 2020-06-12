/**
  * Reducer for the manipulations with the switching the register of logo text.
  */

const SWITCH_REGISTER = 'SWITCH_REGISTER'

/**
 * Initializated state of edit reducer
 * 
 * @param {string} logotext the text of logo
 */
const initialState: object = {
  logotext: 'Textshifter'
}

export const logoReducer = (state = initialState, action: any): object => {
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
  * Action creator what creating action for the switching the register. 
  * 
  * Using in Logo.tsx
  * 
  * @param {string} logotext the first argument, which is mode the theme
  * @returns {string} text of logo in new register
  */
export const switchRegisterCreator = (logotext: string): object => ({type: SWITCH_REGISTER, logotext})

// export const switchRegisterThunkCreator = (text: string) => async (dispatch: any) => {
//     dispatch(switchRegisterCreator(text.toUpperCase()))
// }