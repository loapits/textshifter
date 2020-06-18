import { ChangeEvent } from 'react'

/**
 * Interface for Input container component.
 * 
 * `editedText` - text which was be changed.
 * 
 * `copied` - value indicating that the text is copied to clipboard.
 * 
 * `enterText` - text which was entered to textarea.
 * 
 * `copyToClipboard` - callback for copying to clipboard.
 * 
 * `enteredText` - callback for sending the entering text to store.
 */
export interface IInputContainer {
  editedText: string
  copied: boolean
  enterText: string
  copyToClipboard: () => void
  enteredText: (text: string) => void
}

/**
 * Interface for Input presentation component.
 * 
 * `editedText` - text which was be changed.
 * 
 * `copied` - value indicating that the text is copied to clipboard.
 * 
 * `enterText` - text which was entered to textarea.
 * 
 * `copyToClipboard` - callback for copying to clipboard.
 * 
 * `enteredText` - callback for sending the entering text to store.
 * 
 * `saveFileText` - callback for saving the edited text in .txt file. 
 */
export interface IInput {
  copied: boolean
  editedText: string
  enterText: string
  copyToClipboard: () => void
  enteredText: (event: ChangeEvent<HTMLTextAreaElement>) => void
  saveFileText:  () => void
}