const INPUT_TEXT = "INPUT_TEXT"
const UPPER_CASE = 'UPPER_CASE'
const LOWER_CASE = 'LOWER_CASE'
const CAPITAL_LETTER = 'CAPITAL_LETTER'
const FIRST_TITLE = 'FIRST_TITLE'
const REGISTER_INVRESION = 'REGISTER_INVRESION'
const AS_SENTENCE = 'AS_SENTENCE'

const initialState = {
  enterText: '',
  editedText: ''
}

export const editTextReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        enterText: action.enterText
      }
    }
    case UPPER_CASE: {
      return{
        ...state,
        editedText: action.editedText
      }
    }
    case LOWER_CASE: { 
      return{
        ...state,
        editedText: action.editedText
      }
    }
    case CAPITAL_LETTER: {
      return{
        ...state
      }
    }
    case FIRST_TITLE: {
      return{
        ...state
      }
    }
    case REGISTER_INVRESION: {
      return{
        ...state
      }
    }
    case AS_SENTENCE: {
      return{
        ...state
      }
    }

    default: 
      return state
  }
}

export const enterTextCreator = (text: string) => ({
  type: INPUT_TEXT,
  enterText: text
})

export const upperCaseCreator = (text: string) => ({
  type: UPPER_CASE,
  editedText: text
})
export const lowerCaseCreator = (text: string) => ({
  type: LOWER_CASE,
  editedText: text
})
export const capitalLetterCreator = () => ({type: CAPITAL_LETTER})
export const firstTitleCreator = () => ({type: FIRST_TITLE})
export const registerInversionCreator = () => ({type: REGISTER_INVRESION})
export const asSentenceCreator = () => ({type: AS_SENTENCE})
