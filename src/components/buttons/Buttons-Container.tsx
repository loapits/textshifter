import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from './Buttons'
import { upperCaseCreator, lowerCaseCreator, firstTitleCreator, registerInversionCreator, startAnUpperCaseCreator, asSentenceCreator, replaceTextCreator } from '../../state/edit-text-reducer'
import { IButtonContainer } from '../../interfaces/buttons_interface'
import { stateType } from '../../types/state_type'
import { Dispatch } from 'redux'
import { ActionsTypes } from '../../types/edit_types'

/**
 * The component that is responsible for the buttons.
 * 
 * @method `textUpperCase()` convertin enterText in uppercase.
 * @method `textLowerCase()` convertin enterText in lowercase.
 * @method `firstTitle()` convertin first letter of enterText in uppercase.
 * @method `inverseRegister()` invert every letter on the reverse case.
 * @method `startAnUpperCase()` convertin every letter on uppercase.
 * @method `asSentence()` convertin first letter of every sentence in uppercase.
 * @method `replaceTextRu()` if the text in Eng that convert every letter of sentence on Ru.
 * @method `replaceTextEng()` if the text in Ru that convert every letter of sentence on Eng.
 * @method `render()` return child component.
 */
export class ButtonsContainer extends React.Component<IButtonContainer> {
  /** `enterText` - text which need edit. */
  textUpperCase = () => {
    const enterText = this.props.enterText
    if (enterText) {
      const text = enterText.toUpperCase()
      this.props.upperCase(text)
    }
  }

  /** `enterText` - text which need edit. */ 
  textLowerCase = () => {
    const enterText = this.props.enterText
    if (enterText) {
      const text = enterText.toLowerCase()
      this.props.lowerCase(text)
    }
  }

  /** `enterText` - text which need edit. */
  firstTitle = () => {
    const enterText = this.props.enterText
    if (enterText) {
      const text = enterText[0].toUpperCase() + enterText.slice(1) 
      this.props.firstTitle(text)
    }
  }

  /**
   * Checked, if `enterText` is defined, then the first letter 
   * to uppercase and the rest to lowercase.
   * 
   * `enterText` - text which need edit.
   */
  inverseRegister = () => {
    const enterText = this.props.enterText
    if (enterText) {
      let text = ''
      for (let i = 0; i < enterText.length; i++) {
        enterText[i].toUpperCase() === enterText[i] 
          ? text += enterText[i].toLowerCase()
          : text += enterText[i].toUpperCase()
      }     
      this.props.inverseRegister(text)
    }
  }

  /**
   * If `enterText` is defined, then the first letter converted to uppercase.
   * 
   * `enterText` - text which need edit.
   */
  startAnUpperCase = () => {
    const enterText = this.props.enterText
    if (enterText) {
      const text = enterText.replace(/(^|\s)\S/g, txt => txt.toUpperCase())
      this.props.startAnUpperCase(text)
    }
  }

  /** 
   * If `enterText` is defined, then the first letter converted to uppercase.
   * 
   * `enterText` - text which need edit. 
   */
  asSentence = () => {
    const enterText = this.props.enterText
    if (enterText) {
      const text = enterText[0].toUpperCase() + (enterText.replace(/(^|[?!.;]\s[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}])/gu, txt => txt.toUpperCase())).slice(1)
      this.props.asSentence(text)
    }
  }

  
  /** 
   * Used for implement methods `replaceTextRu()` and `replaceTextEnd()` which return edited text.
   * 
   * @param replacer object that contains values for replacing from letters of one language to letters of another.
   * @param enterText text which need edit.
   * @param replace value for saving register in `replace` text, which is a replaced text, and used in time checking the register.
   * @returns `enterText`, it the text which was edited.
   */
  protected replace = (replacer: {[key: string]: string}, enterText: string, replace: string): string => {
    for (let i = 0; i < enterText.length; i++) {                        
      if( replacer[enterText[i].toLowerCase()] !== undefined ) {
        if (enterText[i] === enterText[i].toLowerCase()) {
          replace = replacer[enterText[i].toLowerCase()]    
        } else if (enterText[i] === enterText[i].toUpperCase()) {
          replace = replacer[enterText[i].toLowerCase()].toUpperCase();
        }
        enterText = enterText.replace(enterText[i], replace)        
      }
    }
    return enterText
  }

  /**
   * Method which replaces English letters in Russian letters.
   * Implementing with help a method `replace()`.
   * 
   * `enterText` - variable which contains in yourself method `replace()`.
   */
  replaceTextRu = () => {      
    const text = this.replace(this.props.replacer, this.props.enterText, '')
    this.props.replaceText(text)
  }

  /**
   * Does the same as in the method `replaceTextRu()` but reversing places keys on algorithm:
   * method Object.keys take a `replacer` and iterates over it, reverting object with
   * invert key and value. 
   * Method which replaces Russian letters in English letters.
   * Implementing with help a method `replace()`.
   * 
   * `enterText` - text which need edit.
   * 
   * `replacer` - object that contains values for replacing from letters of one language to letters of another.
   * 
   * `enterText` - variable which contains in yourself method `replace()`.
   */
  replaceTextEng = () => {      
    const enterText = this.props.enterText
    const replacer: {[key: string]: string} = this.props.replacer

    Object.keys(replacer).forEach((key: string): string => {
      return replacer[replacer[key]] = key
    })

    const text = this.replace(replacer, enterText, '')
    this.props.replaceText(text)
  }
  
  /**
   * Return Button presentatin component, which take in props methods and variables.
   */
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

/**
 * Function, which takes data from state and gives to Button container component.
 * 
 * @param state total state from which taking values `text` and `replacer`.
 * 
 * `enterText` - entered text in which spaces at the edges are removed.
 * 
 * `replacer` - object that contains values for replacing from letters of one language to letters of another.
 */
const mapStateToProps = (state: stateType) => ({
  enterText: state.edit.enterText.trim(),
  replacer: state.edit.replacer
})

/**
 * Function with which help can be change state.
 * 
 * @param dispatch used for informing a store about changes.
  * 
 * It has callbacks for changing. 
 */
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