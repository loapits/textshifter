import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
import { HeaderContainerTypes } from "../../interfaces"
// import { switchRegisterThunkCreator } from "../../state/logo-reducer"



export class HeaderContainer extends React.Component<HeaderContainerTypes> {
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