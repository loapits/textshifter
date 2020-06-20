/**
 * Interface for Button contaner component.
 * 
 * `enterText` - text, which was entered.
 * `upperCase` - callback for convert text to uppercase.
 * `lowerCase` - callback for convert text to lowercase.
 * `firstTitle` - callback for convert first letter of the text to uppercase.
 * `inverseRegister` - Checked, if `enterText` is defined, then the first letter to uppercase and the rest to lowercase.
 * `startAnUpperCase` - first letter of entered text converts to uppercase.
 * `asSentence` - first letter of every sentence converted to uppercase.
 * `replaceText` -  Used for implement methods `replaceTextRu()` and `replaceTextEnd()` which return edited text.
 */
export interface IButtonContainer {
  enterText: string
  replacer: {}
  upperCase: (text: string) => void
  lowerCase: (text: string) => void
  firstTitle: (text: string) => void
  inverseRegister: (text: string) => void
  startAnUpperCase: (text: string) => void
  asSentence: (text: string) => void
  replaceText: (text: string) => void
}

/**
 * Interface for Button presentation component.
 * 
 * `enterText` - text, which was entered.
 * `upperCase` - callback for convert text to uppercase.
 * `lowerCase` - callback for convert text to lowercase.
 * `firstTitle` - callback for convert first letter of the text to uppercase.
 * `inverseRegister` - callback for the converting first letter to uppercase and the rest to lowercase.
 * `startAnUpperCase` - callback for converts first letter of entered text to uppercase.
 * `asSentence` - callback for the converted first letter of every sentence to uppercase.
 * `replaceTextRu` - callback which replaces English letters in Russian letters.
 * `replaceTextEng` - callback which replaces Russian letters in English letters.
 */
export interface IButton {
  textUpperCase: () => void
  textLowerCase: () => void
  firstTitle: () => void
  inverseRegister: () => void
  startAnUpperCase: () => void
  asSentence: () => void
  replaceText: () => void
}
