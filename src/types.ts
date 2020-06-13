import { ChangeEvent } from 'react'

export interface AppContainerTypes {
  mode: string,
  switchTheme: (mode: string) => void
}

export interface AppTypes {
  mode: string,
  switchTheme: () => void
}

export interface ButtonContainerTypes {
  text: string,
  upperCase: Function,
  lowerCase: Function,
  firstTitle: Function,
  inverseRegister: Function,
  startAnUpperCase: Function,
  asSentence: Function,
  replacer: any,
  replaceText: Function,
  themeName: string
}

export interface ButtonTypes {
  textUpperCase: () => void,
  textLowerCase: () => void,
  firstTitle: () => void,
  inverseRegister: () => void,
  startAnUpperCase: () => void,
  asSentence: () => void,
  replaceTextRu: () => void,
  replaceTextEng: () => void
}

export interface HeaderContainerTypes {
  logotext: string,
  toggleTheme: any
}

export interface HeaderTypes {
  toggleTheme: () => string,
  logotext: string
}

export interface LogoTypes {
  logotext: string
}

export interface InputContainerTypes {
  edit: object,
  text: string,
  copied: boolean,
  copyToClipboard: Function,
  enterText: any
}

export interface InputTypes {
  edit: any,
  text: string, 
  copied: boolean, 
  copyToClipboard: any,
  enterText: (event: ChangeEvent<HTMLTextAreaElement>) => void, 
  saveFileText:  () => void
}