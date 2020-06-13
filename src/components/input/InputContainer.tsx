import React from 'react'
import { connect } from "react-redux"
import { Input } from "./Input"
import { saveAs } from 'file-saver'
import { enterTextCreator, copyToClipboardCreator } from "../../state/edit-text-reducer"
import { InputContainerTypes } from '../../types'

class InputContainer extends React.Component<InputContainerTypes> {
  saveFileText = () => {
    const blob = new Blob([this.props.text], {type: "text/plain;charset=utf-8"})
    saveAs(blob, Math.random().toString(36).substring(1) + '.txt')
  }

  enterText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.target.value
    this.props.enterText(text)
  }
  
  render() {
    return (
      <Input 
        edit={this.props.edit}
        text={this.props.text}
        copied={this.props.copied}
        copyToClipboard={this.props.copyToClipboard}
        enterText={this.enterText}
        saveFileText={this.saveFileText}
      />
    )
  }
}

const mapStateToProps = (state: any) => ({
  edit: state.edit,
  text: state.edit.editedText,
  copied: state.edit.copied
})

const mapDispatchToProps = (dispatch: any) => ({
  enterText: (text: string) => {
    let action = enterTextCreator(text)
    dispatch(action)
  },
  copyToClipboard: () => {
    let action = copyToClipboardCreator(true)
    dispatch(action)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)