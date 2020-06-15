import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
import { IHeaderContainer } from "../../interfaces/header_interface"
import { stateType } from "../../types/state_type"

export class HeaderContainer extends React.Component<IHeaderContainer> {
  render() {
    return(
      <Header
        toggleTheme={this.props.toggleTheme} 
        logotext={this.props.logotext} 
      />
    )
  }
}

const mapStateToProps = (state: stateType) => ({
  logotext: state.logo.logotext,
  mode: state.theme.mode
})

export default connect(mapStateToProps)(HeaderContainer)