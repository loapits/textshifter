import React from 'react'
import { connect } from 'react-redux'
import { Navigation } from './Navigation'
import { upperCaseCreator, lowerCaseCreator } from '../../state/edit-text-reducer'

interface text {
  text: string, 
  upperCase: any,
  lowerCase: any
}
class NavigationContainer extends React.Component<text> {

  textUpperCase = () => {
    let textEdit = this.props.text
    const text = textEdit.toUpperCase()
    this.props.upperCase(text)
  }

  textLowerCase = () => {
    let textEdit = this.props.text
    const text = textEdit.toLowerCase()
    this.props.lowerCase(text)
  }

  render() {
    return (
      <Navigation textLowerCase={this.textLowerCase} textUpperCase={this.textUpperCase}/>
    )
  } 
}

const mapStateToProps = (state: any) => {
  return {
    edit: state.edit,
    text: state.edit.enterText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    upperCase: (text: string) => {
      let action = upperCaseCreator(text)
      dispatch(action)
    },
    lowerCase: (text: string) => {
      let action = lowerCaseCreator(text)
      dispatch(action)
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)