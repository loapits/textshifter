import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from './Buttons'
import { upperCaseCreator, lowerCaseCreator, firstTitleCreator, registerInversionCreator, startAnUpperCaseCreator, asSentenceCreator, replaceTextCreator } from '../../state/edit-text-reducer'
import { IButtonContainer } from '../../interfaces/buttons_interface'
import { stateType } from '../../types/state_type'
import { Dispatch } from 'redux'
import { ActionsTypes } from '../../types/edit_types'

export class ButtonsContainer extends React.Component<IButtonContainer> {
  textUpperCase = () => {
    const textEdit = this.props.text
    if (textEdit) {
      const text = textEdit.toUpperCase()
      this.props.upperCase(text)
    }
  }

  textLowerCase = () => {
    const textEdit = this.props.text
    if (textEdit) {
      const text = textEdit.toLowerCase()
      this.props.lowerCase(text)
    }
  }

  firstTitle = () => {
    const textEdit = this.props.text
    if (textEdit) {
      const text = textEdit[0].toUpperCase() + textEdit.slice(1) 
      this.props.firstTitle(text)
    }
  }

  inverseRegister = () => {
    const textEdit = this.props.text
    if (textEdit) {
      let text = ''
      for (let i = 0; i < textEdit.length; i++) {
        textEdit[i].toUpperCase() === textEdit[i] 
          ? text += textEdit[i].toLowerCase()
          : text += textEdit[i].toUpperCase()
      }     
      this.props.inverseRegister(text)
    }
  }

  startAnUpperCase = () => {
    const textEdit = this.props.text
    if (textEdit) {
      const text = textEdit.replace(/(^|\s)\S/g, txt => txt.toUpperCase())
      this.props.startAnUpperCase(text)
    }
  }

  asSentence = () => {
    const textEdit = this.props.text
    if (textEdit) {
      const text = textEdit[0].toUpperCase() + (textEdit.replace(/(^|[?!.;]\s[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}])/gu, txt => txt.toUpperCase())).slice(1)
      this.props.asSentence(text)
    }
  }

  protected replace = (replacer: {[key: string]: string}, textEdit: string, replace: string): string => {
    for (let i = 0; i < textEdit.length; i++) {                        
      if( replacer[textEdit[i].toLowerCase()] !== undefined ) {
        if (textEdit[i] === textEdit[i].toLowerCase()) {
          replace = replacer[ textEdit[i].toLowerCase() ]    
        } else if (textEdit[i] === textEdit[i].toUpperCase()) {
          replace = replacer[ textEdit[i].toLowerCase() ].toUpperCase();
        }
        textEdit = textEdit.replace(textEdit[i], replace)
      }
    }
    return textEdit
  }

  replaceTextRu = () => {      
    const text = this.replace(this.props.replacer, this.props.text, '')
    this.props.replaceText(text)
  }

  replaceTextEng = () => {      
    const textEdit = this.props.text
    const replacer: {[key: string]: string} = this.props.replacer

    Object.keys(replacer).forEach((key: string): string => {
      return replacer[replacer[key]] = key
    })

    const text = this.replace(replacer,textEdit, '')
    this.props.replaceText(text)
  }
  
  render() {
    return (
      <Buttons
        textUpperCase={this.textUpperCase}
        textLowerCase={this.textLowerCase}
        firstTitle={this.firstTitle}
        inverseRegister={this.inverseRegister}
        startAnUpperCase={this.startAnUpperCase}
        asSentence={this.asSentence}
        replaceTextEng={this.replaceTextEng}
        replaceTextRu={this.replaceTextRu}
      />
    )
  } 
}

const mapStateToProps = (state: stateType) => ({
  text: state.edit.enterText.trim(),
  replacer: state.edit.replacer
})

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
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
  },
  replaceText: (text: string) => {
    const action = replaceTextCreator(text)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)