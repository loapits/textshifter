const SWITCH_THEME = 'SWITCH_THEME'

const initialState = {
  currentTheme: 'light' 
}

export const switchThemeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SWITCH_THEME: {
      return{
        ...state,
        currentTheme: action.themeName
      }
    }

    default: 
      return state
  }
}

export const switchThemeCreator = (themeName: string) => ({type: SWITCH_THEME, themeName})