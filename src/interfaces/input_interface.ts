import { ChangeEvent } from 'react'

export interface InputContainerInterface {
  edit: object
  text: string
  copied: boolean
  enterText: string
  copyToClipboard: () => void
  enteredText: (text: string) => void
}

export interface InputInterface {
  text: string
  enterText: string
  copyToClipboard: () => void
  enteredText: (event: ChangeEvent<HTMLTextAreaElement>) => void
  saveFileText:  () => void
}