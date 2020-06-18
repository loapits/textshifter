import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
import { IHeaderContainer } from "../../interfaces/header_interface"
import { stateType } from "../../types/state_type"

/**
 * @method `render()` return child component.
 */
export class HeaderContainer extends React.Component<IHeaderContainer> {
  /**
   * Return Header presentatin component, which take in props methods and variables.
   */
  render() {
    return(
      <Header
        toggleTheme={this.props.toggleTheme}
        logotext={this.props.logotext}
      />
    )
  }
}

/**
 * Function, which takes data from state and gives to Header container component.
 * 
 * @param state total state from which taking values `logotext` and `mode`.
 * 
 * `logotext` - it's the text of the logo.
 * 
 * `mode` - it value the theme mode, which can be switching.
 */
const mapStateToProps = (state: stateType) => ({
  logotext: state.logo.logotext,
  mode: state.theme.mode
})

export default connect(mapStateToProps)(HeaderContainer)