import { ChangeEvent } from 'react'

export interface IInputContainer {
  edit: object
  text: string
  copied: boolean
  enterText: string
  copyToClipboard: () => void
  enteredText: (text: string) => void
}

export interface IInput {
  text: string
  enterText: string
  copyToClipboard: () => void
  enteredText: (event: ChangeEvent<HTMLTextAreaElement>) => void
  saveFileText:  () => void
}