import letters from './letters.json'
const INPUT_TEXT = 'INPUT_TEXT'
const UPPER_CASE = 'UPPER_CASE'
const LOWER_CASE = 'LOWER_CASE'
const FIRST_TITLE = 'FIRST_TITLE'
const REGISTER_INVRESION = 'REGISTER_INVRESION'
const AS_SENTENCE = 'AS_SENTENCE'
const START_AN_UPPER_CASE = 'START_AN_UPPER_CASE'
const REPLASE_TEXT = 'REPLASE_TEXT'
const SET_COPY_CLIPBOARD = 'SET_COPY_CLIPBOARD'

const initialState: object = {
  enterText: '',
  editedText: '',
  replacer: letters.replacer,
  copied: false,
}

export const editTextReducer = (state = initialState, action: any): object => {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        enterText: action.enterText
      }
    }
    case UPPER_CASE: {
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case LOWER_CASE: { 
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case FIRST_TITLE: {
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case REGISTER_INVRESION: {
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case START_AN_UPPER_CASE: {
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case AS_SENTENCE: {
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case REPLASE_TEXT: {
      return {
        ...state,
        editedText: action.editedText
      }
    }
    case SET_COPY_CLIPBOARD: {
      return {
        ...state,
        copied: true
      }
    }

    default: 
      return state
  }
}

export const enterTextCreator = (text: string): object => ({
  type: INPUT_TEXT,
  enterText: text
})

export const upperCaseCreator = (text: string): object => ({
  type: UPPER_CASE,
  editedText: text
})

export const lowerCaseCreator = (text: string): object => ({
  type: LOWER_CASE,
  editedText: text
})

export const firstTitleCreator = (text: string): object => ({
  type: FIRST_TITLE,
  editedText: text
})

export const registerInversionCreator = (text: string): object => ({
  type: REGISTER_INVRESION,
  editedText: text
})

export const startAnUpperCaseCreator = (text: string): object => ({
  type: START_AN_UPPER_CASE,
  editedText: text
})

export const asSentenceCreator = (text: string): object => ({
  type: AS_SENTENCE,
  editedText: text
})

export const replaceTextCreator = (text: string): object => ({
  type: REPLASE_TEXT,
  editedText: text
})

export const copyToClipboardCreator = (copied: boolean): object => ({
  type: SET_COPY_CLIPBOARD, 
  copied: copied
})