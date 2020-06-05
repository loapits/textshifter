const SWITCH_THEME = 'SWITCH_THEME'

const initialState = {
  mode: 'light' 
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

export const switchThemeCreator = (mode: string) => ({type: SWITCH_THEME, mode})