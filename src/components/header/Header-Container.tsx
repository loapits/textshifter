import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"

interface text {
  logotext: any,
  toggleTheme: any,
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

export default connect(mapStateToProps)(HeaderContainer)