import React from 'react'
import { connect } from "react-redux"
import { Input } from "./Input"
import { saveAs } from 'file-saver'
import { enterTextCreator, copyToClipboardCreator } from "../../state/edit-text-reducer"
import { IInputContainer } from '../../interfaces/input_interface'
import { Dispatch } from 'redux'
import { ActionsTypes } from '../../types/edit_types'
import { stateType } from '../../types/state_type'

export class InputContainer extends React.Component<IInputContainer> {
  saveFileText = () => {
    const blob = new Blob([this.props.text], {type: "text/plain;charset=utf-8"})
    saveAs(blob, Math.random().toString(36).substring(1) + '.txt')
  }

  enteredText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.target.value
    this.props.enteredText(text)
  }

  render() {
    return (
      <Input
        text={this.props.text}
        enterText={this.props.enterText}
        copyToClipboard={this.props.copyToClipboard}
        enteredText={this.enteredText}
        saveFileText={this.saveFileText}
      />
    )
  }
}

const mapStateToProps = (state: stateType) => ({
  edit: state.edit,
  enterText: state.edit.enterText,
  text: state.edit.editedText,
  copied: state.edit.copied
})

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
  enteredText: (text: string) => {
    let action = enterTextCreator(text)
    dispatch(action)
  },
  copyToClipboard: () => {
    let action = copyToClipboardCreator(true)
    dispatch(action)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)