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

/**
 * Initializated state of edit reducer
 * 
 * @param {string} enterText text which enter user in textarea
 * @param {string} editedText text which edited, afetr click on button
 * @param {object} replacer object with all the letters that are needed to replace layout
 * @param {boolean} copied a boolean value that is set when text is copied to the clipboard
 */
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

/**
  * Action creator for show entered text in textarea.
  * 
  * Using in InputContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} showing in textarea words
  */
export const enterTextCreator = (text: string): object => ({
  type: INPUT_TEXT,
  enterText: text
})

/**
  * Action creator for change case to upper.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text the text which is edit
  * @returns {string} text in uppercase
  */
export const upperCaseCreator = (text: string): object => ({
  type: UPPER_CASE,
  editedText: text
})

/**
  * Action creator for change case to lower.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} text in lowercase
  */
export const lowerCaseCreator = (text: string): object => ({
  type: LOWER_CASE,
  editedText: text
})

/**
  * Action creator in order to capitalize the first letter of the word.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} text in which first symbol to uppercase
  */
export const firstTitleCreator = (text: string): object => ({
  type: FIRST_TITLE,
  editedText: text
})

/**
  * Action creator for inverting register.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} text in which inverting register
  */
export const registerInversionCreator = (text: string): object => ({
  type: REGISTER_INVRESION,
  editedText: text
})

/**
  * Action creator - every new word start on uppercase.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} text and every word start on uppercase
  */
export const startAnUpperCaseCreator = (text: string): object => ({
  type: START_AN_UPPER_CASE,
  editedText: text
})

/**
  * Action creator makes the first letter to sentences uppercase and leaves the rest lowercase.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} text in which first letter uppercase and the rest lowercase
  */
export const asSentenceCreator = (text: string): object => ({
  type: AS_SENTENCE,
  editedText: text
})

/**
  * Action creator for replacing text Eng → Ru or Ru → Eng.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {string} text if any symbol entered, its gets into store
  * @returns {string} new text, in which replacing Latin layout to Cyrillic or conversely
  */
export const replaceTextCreator = (text: string): object => ({
  type: REPLASE_TEXT,
  editedText: text
})

/**
  * Action creator changes the parameter that is intended for copying the text to clipboard.
  * 
  * Using in ButtonsContainer.tsx
  * 
  * @param {boolean} copied if any symbol entered, its gets into store
  * @returns {object} than the changed parameter copied
  */
export const copyToClipboardCreator = (copied: boolean): object => ({
  type: SET_COPY_CLIPBOARD, 
  copied: copied
})