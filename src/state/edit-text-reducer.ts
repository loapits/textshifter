/**
  * Reducer for the changing register of text, which entered the user.
  */

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

const initialState = {
  voidInp: '',
  enterText: '',
  editedText: '',
  replacer: letters.replacer,
  copied: false,
}

export const editTextReducer = (state = initialState, action: any) => {
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

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in InputContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {text: string} return showing in textarea words
  */
export const enterTextCreator = (text: string) => ({
  type: INPUT_TEXT,
  enterText: text
})

/**
  * Action creator for change case to upper.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {text: string} text if any symbol entered, its gets into store
  * @returns {editedText: string} return text in upper case
  */
export const upperCaseCreator = (text: string) => ({
  type: UPPER_CASE,
  editedText: text
})

/**
  * Action creator for change case to lower.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {text: string} text if any symbol entered, its gets into store
  * @returns {editedText: string} return text in lower case
  */
export const lowerCaseCreator = (text: string) => ({
  type: LOWER_CASE,
  editedText: text
})

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in Buttons.tsx
  * 
  * @param {string} enteringText if any symbol entered, its gets into store
  * @returns {text} return showing in textarea words
  */
export const firstTitleCreator = (text: string) => ({
  type: FIRST_TITLE,
  editedText: text
})

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in Buttons.tsx
  * 
  * @param {string} enteringText if any symbol entered, its gets into store
  * @returns {text} return showing in textarea words
  */
export const registerInversionCreator = (text: string) => ({
  type: REGISTER_INVRESION,
  editedText: text
})

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in Buttons.tsx
  * 
  * @param {string} enteringText if any symbol entered, its gets into store
  * @returns {text} return showing in textarea words
  */
export const startAnUpperCaseCreator = (text: string) => ({
  type: START_AN_UPPER_CASE,
  editedText: text
})

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in Buttons.tsx
  * 
  * @param {string} enteringText if any symbol entered, its gets into store
  * @returns {text} return showing in textarea words
  */
export const asSentenceCreator = (text: string) => ({
  type: AS_SENTENCE,
  editedText: text
})

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in Buttons.tsx
  * 
  * @param {string} enteringText if any symbol entered, its gets into store
  * @returns {text} return showing in textarea words
  */
export const replaceTextCreator = (text: string) => ({
  type: REPLASE_TEXT,
  editedText: text
})

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in Buttons.tsx
  * 
  * @param {string} enteringText if any symbol entered, its gets into store
  * @returns {text} return showing in textarea words
  */
export const copyToClipboardCreator = (copied: boolean) => ({
  type: SET_COPY_CLIPBOARD, 
  copied: copied
})