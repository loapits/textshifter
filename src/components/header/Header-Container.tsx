import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
// import { switchRegisterThunkCreator } from "../../state/logo-reducer"

interface text {
  logotext: string,
  toggleTheme: any
}

export class HeaderContainer extends React.Component<text> {
  render() {
    return(
      <Header
        toggleTheme={this.props.toggleTheme} 
        logotext={this.props.logotext} 
      />
    )
  }
}

const mapStateToProps = (state: any) => ({
  logotext: state.logo.logotext,
  mode: state.theme.mode
})

// const mapDispatchToProps = (dispatch: any) => ({
//   switchReg: (text: any) => {
//     const action = switchRegisterThunkCreator(text)
//     dispatch(action)
//   }
// })

export default connect(mapStateToProps)(HeaderContainer)