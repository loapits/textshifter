import { INPUT_TEXT, UPPER_CASE, LOWER_CASE, FIRST_TITLE, REGISTER_INVRESION, START_AN_UPPER_CASE, AS_SENTENCE, REPLASE_TEXT, SET_COPY_CLIPBOARD } from "../state/edit-text-reducer"

export type enterTextType = {
  type: typeof INPUT_TEXT
  enterText: string
}

export type upperCaseType = {
  type: typeof UPPER_CASE
  editedText: string
}

export type lowerCaseType = {
  type: typeof LOWER_CASE
  editedText: string
}

export type firstTitleType = {
  type: typeof FIRST_TITLE
  editedText: string
}

export type registerInversionType = {
  type: typeof REGISTER_INVRESION
  editedText: string
}

export type startAnUpperCaseType = {
  type: typeof START_AN_UPPER_CASE
  editedText: string
}

export type asSentenceType = {
  type: typeof AS_SENTENCE
  editedText: string
}

export type replaceTextType = {
  type: typeof REPLASE_TEXT
  editedText: string
}

export type copyToClipboardType = {
  type: typeof SET_COPY_CLIPBOARD
  copied: boolean
}

export type ActionsTypes = enterTextType | upperCaseType | lowerCaseType | firstTitleType |
                          registerInversionType | startAnUpperCaseType | asSentenceType |
                          replaceTextType | copyToClipboardType