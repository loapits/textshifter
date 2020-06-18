import React from 'react'
import { connect } from "react-redux"
import { Input } from "./Input"
import { saveAs } from 'file-saver'
import { enterTextCreator, copyToClipboardCreator } from "../../state/edit-text-reducer"
import { IInputContainer } from '../../interfaces/input_interface'
import { Dispatch } from 'redux'
import { ActionsTypes } from '../../types/edit_types'
import { stateType } from '../../types/state_type'

/**
 * The component that is responsible for the buttons.
 * 
 * @method `saveFileText()` saving edited text in txt format.
 * @method `enteredText()` send every symbol from the text area to a redux store.
 * @method `render()` return child component.
 */
export class InputContainer extends React.Component<IInputContainer> {
  /**
   * `blob` - variable, which contains an instance of the class `Blob` from the file-saver library, which 
   * using for downloading .txt file with edited text. Takes 2 params: text, which contains in textarea
   * and type of text.
   * 
   * `saveAs` - function, which comes from a file-saver library and saves the file. In params takes a text 
   * from textarea, and a Name of the file.
   */
  saveFileText = () => {
    const blob = new Blob([this.props.editedText], {type: "text/plain; charset=utf-8"})
    saveAs(blob, Math.random().toString(36).substring(1) + '.txt')
  }

  /**
   * Sending every symbol from the textarea to redux store. 
   * 
   * @param event the event from Input presentation component.
   * 
   * `text` - all text which enter in textarea.
   */
  enteredText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.target.value
    this.props.enteredText(text)
  }

  render() {
    return (
      <Input
        copied={this.props.copied}
        editedText={this.props.editedText}
        enterText={this.props.enterText}
        copyToClipboard={this.props.copyToClipboard}
        enteredText={this.enteredText}
        saveFileText={this.saveFileText}
      />
    )
  }
}

/**
 * Function, which takes data from state and gives to Input container component.
 * 
 * @param state total state from which taking values `enterText`, `text` and `copied`.
 *  
 * `enterText` - text which was be entered.
 * 
 * `editedText` - text, which was being edited and come from the state to the textarea.
 * 
 * `copied` - parameter, which changing if click on copyToClipboard button.
 */
const mapStateToProps = (state: stateType) => ({
  enterText: state.edit.enterText,
  editedText: state.edit.editedText,
  copied: state.edit.copied
})

/**
 * Function with which help can be change state.
 * 
 * @param dispatch used for informing a store about changes.
 *
 * It has callbacks for changing.
 */
const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
  enteredText: (text: string) => {
    let action = enterTextCreator(text)
    dispatch(action)
  },
  copyToClipboard: () => {
    dispatch(copyToClipboardCreator(true))
    
    setTimeout(() => {
      dispatch(copyToClipboardCreator(false))
    }, 2000)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)