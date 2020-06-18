import React from 'react'
import './style/index.scss'
import { switchThemeCreator } from './state/switch-theme-reducer'
import { connect } from 'react-redux'
import { App } from './App'
import { IAppContainer } from './interfaces/app_interface'

/**
 * The component that is responsible for the buttons.
 * 
 * @method `componentDidUpdate()` method for update component.
 * @method `switchTheme()` method for switch theme.
 * @method `render()` return child component.
 */
class AppContainer extends React.Component<IAppContainer> {
  /**
   * A method, which following the mode of theme, and if mode changed then 
   * set it in localstorage.
   */
  componentDidUpdate() {
    localStorage.setItem('mode', this.props.mode)
  }

  /**
   * Method for switching theme.
   * 
   * `mode` - the value of theme mode(dark or light).
   */
  switchTheme = () => {
    let mode = this.props.mode
    mode === 'light' ? mode = 'dark' : mode = 'light'
    this.props.switchTheme(mode)
  }

  render() {
    return (
      <App
        mode={this.props.mode}
        switchTheme={this.switchTheme} 
      />
    )
  }
}

/**
 * Function, which takes data from state and gives to App container component.
 * 
 * @param state total state from which taking values `mode`.
 *  
 * `mode` - the value of theme mode(dark or light).
 */
const mapStateToProps = (state: any) => ({
  mode: state.theme.mode
})

/**
 * Function with which help can be change state.
 * 
 * @param dispatch used for informing a store about changes.
 *
 * It has callbacks for changing.
 */
const mapDispatchToProps = (dispatch: any) => ({
  switchTheme: (mode: string) => {
    dispatch(switchThemeCreator(mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)