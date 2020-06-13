const SWITCH_THEME = 'SWITCH_THEME'

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

export const switchThemeCreator = (mode: string): object => ({type: SWITCH_THEME, mode})