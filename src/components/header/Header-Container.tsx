import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
import { compose } from "redux"

interface text {
  logotext: any
}
export class HeaderContainer extends React.Component<text>{


  render() {
    return(
      <Header logotext={this.props.logotext}/>
    )
  }
}
const mapStateToProps = (state: any) => {

  return {
    logotext: state.logo.logotext
  }
}

export default compose(connect(mapStateToProps))(HeaderContainer)