const SWITCH_REGISTER = 'SWITCH_REGISTER'

const initialState = {
  logotext: 'textshifter'
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

export const switchRegister = () => ({type: SWITCH_REGISTER})
