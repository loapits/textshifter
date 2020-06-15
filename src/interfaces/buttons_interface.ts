export interface IButtonContainer {
  text: string
  upperCase: (text: string) => void
  lowerCase: (text: string) => void
  firstTitle: (text: string) => void
  inverseRegister: (text: string) => void
  startAnUpperCase: (text: string) => void
  asSentence: (text: string) => void
  replacer: {}
  replaceText: (text: string) => void
}

export interface IButton {
  textUpperCase: () => void
  textLowerCase: () => void
  firstTitle: () => void
  inverseRegister: () => void
  startAnUpperCase: () => void
  asSentence: () => void
  replaceTextRu: () => void
  replaceTextEng: () => void
}
