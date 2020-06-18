import { INPUT_TEXT, UPPER_CASE, LOWER_CASE, FIRST_TITLE, REGISTER_INVRESION, START_AN_UPPER_CASE, AS_SENTENCE, REPLASE_TEXT, SET_COPY_CLIPBOARD } from "../state/types"

/**
 * EnterTextType of edit reducer in state.
 * 
 * `type` - for the enter text in a editTextReducer.
 * 
 * `enterText` - text which was entered.
 */
export type enterTextType = {
  type: typeof INPUT_TEXT
  enterText: string
}

/**
 * UpperCaseType of edit reducer in state.
 * 
 * `type` - for the text to uppercase in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type upperCaseType = {
  type: typeof UPPER_CASE
  editedText: string
}

/**
 * LowerCaseType of edit reducer in state.
 * 
 * `type` - for the text to lowercase in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type lowerCaseType = {
  type: typeof LOWER_CASE
  editedText: string
}

/**
 * FirstTitleType of edit reducer in state.
 * 
 * `type` - for the text to firstTitle in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type firstTitleType = {
  type: typeof FIRST_TITLE
  editedText: string
}

/**
 * RegisterInversion of edit reducer in state.
 * 
 * `type` - for the text to registerInversion in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type registerInversionType = {
  type: typeof REGISTER_INVRESION
  editedText: string
}

/**
 * StartAnUpperCase of edit reducer in state.
 * 
 * `type` - for the text to startAnUpperCase in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type startAnUpperCaseType = {
  type: typeof START_AN_UPPER_CASE
  editedText: string
}

/**
 * AsSentence of edit reducer in state.
 * 
 * `type` - for the text to asSentence in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type asSentenceType = {
  type: typeof AS_SENTENCE
  editedText: string
}

/**
 * ReplaceText of edit reducer in state.
 * 
 * `type` - for the text to replaceText in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type replaceTextType = {
  type: typeof REPLASE_TEXT
  editedText: string
}

/**
 * CopyToClipboard of edit reducer in state.
 * 
 * `type` - for the text to copyToClipboard in a editTextReducer.
 * 
 * `editedText` - text, which must be edited.
 */
export type copyToClipboardType = {
  type: typeof SET_COPY_CLIPBOARD
  copied: boolean
}

/**
 * All types for the typization a store.
 */
export type ActionsTypes = enterTextType | upperCaseType | lowerCaseType | firstTitleType |
                          registerInversionType | startAnUpperCaseType | asSentenceType |
                          replaceTextType | copyToClipboardType