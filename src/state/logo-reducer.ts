const SWITCH_REGISTER = 'SWITCH_REGISTER'

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

export const switchRegisterCreator = (logotext: string): object => ({type: SWITCH_REGISTER, logotext})

// export const switchRegisterThunkCreator = (text: string) => async (dispatch: any) => {
//     dispatch(switchRegisterCreator(text.toUpperCase()))
// }