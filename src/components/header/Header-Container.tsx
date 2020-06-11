import React from "react"
import { connect } from "react-redux"
import { switchRegisterThunkCreator } from "../../state/logo-reducer"
import { Header } from "./Header"

interface text {
  logotext: any,
  toggleTheme: any,
  switchReg: any
}

export class HeaderContainer extends React.Component<text>{
  render() {
    return(
      <Header 
        toggleTheme={this.props.toggleTheme} 
        logotext={this.props.logotext} 
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    logotext: state.logo.logotext,
    mode: state.theme.mode
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    switchReg: (text: any) => {
      const action = switchRegisterThunkCreator(text)
      dispatch(action)      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)