import letters from './letters.json'
import { enterTextType, upperCaseType, lowerCaseType, firstTitleType, registerInversionType, startAnUpperCaseType, asSentenceType, replaceTextType, copyToClipboardType, ActionsTypes } from '../types/edit_types'
import { INPUT_TEXT, UPPER_CASE, LOWER_CASE, FIRST_TITLE, REGISTER_INVRESION, START_AN_UPPER_CASE, AS_SENTENCE, REPLASE_TEXT, SET_COPY_CLIPBOARD } from './types'

/**
 * Starting state of the `editTextReducer`.
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
 * Returns `logoInitialTypes` which is a type of data in the `editTextReducer`.
 */
export type editInitialTypes = typeof initialState

/**
 * `editTextReducer` which if missing type returns the state.
 * 
 * `INPUT_TEXT` - used for tracking entering text.
 * 
 * `UPPER_CASE` - used for converting text to uppercase.
 * 
 * `LOWER_CASE` - used for converting text to lowercase.
 * 
 * `FIRST_TITLE` - used for converting the first letter of the entered text to uppercase.
 * 
 * `REGISTER_INVRESION` -  used for invert register of the entered text.
 * 
 * `START_AN_UPPER_CASE` - used to convert the first letter of every entered word to uppercase.
 * 
 * `AS_SENTENCE` - used to convert the first letter of every sentence to uppercase.
 * 
 * `REPLASE_TEXT` - used for replacing English letters to Russian or Russian letters to English.
 * 
 * `SET_COPY_CLIPBOARD` - used to set `copied` value for implementing copy a text to the clipboard.
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

/**
 * Action creator for `INPUT_TEXT` type.
 * 
 * @param text the value which contains the was entered text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `enterText` - a value in which must be tracking entering text.
 */
export const enterTextCreator = (text: string): enterTextType => ({
  type: INPUT_TEXT,
  enterText: text
})

/**
 * Action creator for `UPPER_CASE` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value of which must be converted text to uppercase.
 */
export const upperCaseCreator = (text: string): upperCaseType => ({
  type: UPPER_CASE,
  editedText: text
})

/**
 * Action creator for `LOWER_CASE` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value which must be converted text to lowercase.
 */
export const lowerCaseCreator = (text: string): lowerCaseType => ({
  type: LOWER_CASE,
  editedText: text
})

/**
 * Action creator for `FIRST_TITLE` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value in which it is necessary to convert the first letter of the entered text to uppercase.
 */
export const firstTitleCreator = (text: string): firstTitleType => ({
  type: FIRST_TITLE,
  editedText: text
})

/**
 * Action creator for `REGISTER_INVRESION` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value if which must be invert register of the entered text.
 */
export const registerInversionCreator = (text: string): registerInversionType => ({
  type: REGISTER_INVRESION,
  editedText: text
})

/**
 * Action creator for `START_AN_UPPER_CASE` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value in which it is necessary to convert the first letter of each entered word to uppercase.
 */
export const startAnUpperCaseCreator = (text: string): startAnUpperCaseType => ({
  type: START_AN_UPPER_CASE,
  editedText: text
})

/**
 * Action creator for `AS_SENTENCE` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value which must be changed.
 */
export const asSentenceCreator = (text: string): asSentenceType => ({
  type: AS_SENTENCE,
  editedText: text
})

/**
 * Action creator for `REPLASE_TEXT` type.
 * 
 * @param text the value which contains the must be edited text.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `editedText` - a value in which the first letter of every sentence must be converted to uppercase.
 */
export const replaceTextCreator = (text: string): replaceTextType => ({
  type: REPLASE_TEXT,
  editedText: text
})

/**
 * Action creator for `SET_COPY_CLIPBOARD` type.
 * 
* @param copied the value which if the text to was copied set true.
 * 
 * `type` - the type by which the desiring value is found to change.
 * 
 * `copied` - a boolean value, which displays whether the text is copied.
 */
export const copyToClipboardCreator = (copied: boolean): copyToClipboardType => ({
  type: SET_COPY_CLIPBOARD, 
  copied: copied
})