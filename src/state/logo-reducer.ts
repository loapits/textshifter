/**
  * Reducer for the manipulations with the switching the register of logo text.
  */

const SWITCH_REGISTER = 'SWITCH_REGISTER'

const initialState = {
  logotext: 'Textshifter'
}

export const logoReducer = (state = initialState, action: any) => {
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
  * @param {string} logotext - first argument, which is mode the theme
  * @returns {string} return Text of logo in new register
  */
export const switchRegisterCreator = (logotext: string) => ({type: SWITCH_REGISTER, logotext})

// export const switchRegisterThunkCreator = (text: string) => async (dispatch: any) => {
//     dispatch(switchRegisterCreator(text.toUpperCase()))
// }