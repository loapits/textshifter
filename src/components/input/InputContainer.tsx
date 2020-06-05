import React from 'react'
import { connect } from "react-redux"
import { Input } from "./Input"
import { saveAs } from 'file-saver'
import { enterTextCreator, copyToClipboardCreator } from "../../state/edit-text-reducer";

interface text {
  edit: any,
  text: string,
  copied: boolean,
  copyToClipboard: any,
  convertText: any
}

class InputContainer extends React.Component<text> {

  saveFileText = () => {
    const blob = new Blob([this.props.text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, 'Hello_from_textshifter.txt');
  }
  
  render() {
    return (
      <Input 
        edit={this.props.edit}
        text={this.props.text}
        copied={this.props.copied}
        copyToClipboard={this.props.copyToClipboard}
        convertText={this.props.convertText}
        saveFileText={this.saveFileText}
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    edit: state.edit,
    text: state.edit.editedText,
    copied: state.edit.copied
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    convertText: (text: string) => {
      let action = enterTextCreator(text)
      dispatch(action)
    },
    copyToClipboard: () => {
      let action = copyToClipboardCreator(true)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)