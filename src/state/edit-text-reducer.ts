import letters from './letters.json'
import { enterTextType, upperCaseType, lowerCaseType, firstTitleType, registerInversionType, startAnUpperCaseType, asSentenceType, replaceTextType, copyToClipboardType, ActionsTypes } from '../types/edit_types'
import { INPUT_TEXT, UPPER_CASE, LOWER_CASE, FIRST_TITLE, REGISTER_INVRESION, START_AN_UPPER_CASE, AS_SENTENCE, REPLASE_TEXT, SET_COPY_CLIPBOARD } from './types'

/**
 * Starting state of the application.
 * 
 * `enterText` - text which was entered.
 * `editedText` - text which was edited.
 * `replacer` - object that contains values for replacing from letters of one language to letters of another.
 * `copied` - boolean value, which becomes true if click on copyToClipboardButton button.
 */
const initialState = {
  enterText: '',
  editedText: '',
  replacer: letters.replacer as object,
  copied: false
}

/**
 * Returns types of data in the state.
 */
export type editInitialTypes = typeof initialState

/**
 * 
 */
export const editTextReducer = (state = initialState, action: ActionsTypes): editInitialTypes => {
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
        copied: action.copied
      }
    }

    default: 
      return state
  }
}

export const enterTextCreator = (text: string): enterTextType => ({
  type: INPUT_TEXT,
  enterText: text
})

export const upperCaseCreator = (text: string): upperCaseType => ({
  type: UPPER_CASE,
  editedText: text
})

export const lowerCaseCreator = (text: string): lowerCaseType => ({
  type: LOWER_CASE,
  editedText: text
})

export const firstTitleCreator = (text: string): firstTitleType => ({
  type: FIRST_TITLE,
  editedText: text
})

export const registerInversionCreator = (text: string): registerInversionType => ({
  type: REGISTER_INVRESION,
  editedText: text
})

export const startAnUpperCaseCreator = (text: string): startAnUpperCaseType => ({
  type: START_AN_UPPER_CASE,
  editedText: text
})

export const asSentenceCreator = (text: string): asSentenceType => ({
  type: AS_SENTENCE,
  editedText: text
})

export const replaceTextCreator = (text: string): replaceTextType => ({
  type: REPLASE_TEXT,
  editedText: text
})

export const copyToClipboardCreator = (copied: boolean): copyToClipboardType => ({
  type: SET_COPY_CLIPBOARD, 
  copied: copied
})