import React from 'react'
import { connect } from 'react-redux'
import { Navigation } from './Navigation'
import { upperCaseCreator, lowerCaseCreator, firstTitleCreator, registerInversionCreator, startAnUpperCaseCreator, asSentenceCreator } from '../../state/edit-text-reducer'

interface text {
  text: string, 
  upperCase: any,
  lowerCase: any,
  firstTitle: any,
  inverseRegister: any,
  startAnUpperCase: any,
  asSentence: any
}

class NavigationContainer extends React.Component<text> {

  textUpperCase = () => {
    const textEdit = this.props.text
    const text = textEdit.toUpperCase()
    this.props.upperCase(text)
  }

  textLowerCase = () => {
    const textEdit = this.props.text
    const text = textEdit.toLowerCase()
    this.props.lowerCase(text)
  }

  firstTitle = () => {
    const textEdit = this.props.text
    const text = textEdit[0].toUpperCase() + textEdit.slice(1) 
    this.props.firstTitle(text)
  }

  inverseRegister = () => {
    const textEdit = this.props.text
    let text = ''
    for (let i = 0; i < textEdit.length; i++) {
      textEdit[i].toUpperCase() === textEdit[i] 
        ? text += textEdit[i].toLowerCase()
        : text += textEdit[i].toUpperCase()
    }     
    this.props.inverseRegister(text)
  }

  startAnUpperCase = () => {
    const textEdit = this.props.text
    const text = textEdit.replace(/(^|\s)\S/g, txt => txt.toUpperCase())
    this.props.startAnUpperCase(text)
  }

  asSentence = () => {
    const textEdit = this.props.text
    const text = textEdit[0].toUpperCase() + (textEdit.replace(/(^|[?!.;]\s[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}])/gu, txt => txt.toUpperCase())).slice(1)
    this.props.asSentence(text)
  }

  selectEdit = (e: any) => {
    switch (e.target.value) {
      case 'upperCase':        
        return this.textUpperCase()
      case 'lowerCase':
        return this.textLowerCase()
      case 'firstTitle':
        return this.firstTitle()
      case 'invertRegister':
        return this.inverseRegister()
      case 'startAnUpperCase':
        return this.startAnUpperCase()
      case 'asSentence':
        return this.asSentence()
    }
  }

  render() {
    return (
      <Navigation
        selectEdit={this.selectEdit}
      />
    )
  } 
}

const mapStateToProps = (state: any) => {
  return {
    edit: state.edit,
    text: state.edit.enterText.trim()
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    upperCase: (text: string) => {
      const action = upperCaseCreator(text)
      dispatch(action)
    },
    lowerCase: (text: string) => {
      const action = lowerCaseCreator(text)
      dispatch(action)
    },
    firstTitle: (text: string) => {
      const action = firstTitleCreator(text)
      dispatch(action)
    },
    inverseRegister: (text: string) => {
      const action = registerInversionCreator(text)
      dispatch(action)
    },
    startAnUpperCase: (text: string) => {
      const action = startAnUpperCaseCreator(text)
      dispatch(action)
    },
    asSentence: (text: string) => {      
      const action = asSentenceCreator(text)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)