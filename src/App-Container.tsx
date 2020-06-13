import React from 'react'
import './style/index.scss'
import { switchThemeCreator } from './state/switch-theme-reducer'
import { connect } from 'react-redux'
import { App } from './App'
import { AppContainerTypes } from './types'

class AppContainer extends React.Component<AppContainerTypes> {
  componentDidUpdate() {
    localStorage.setItem('mode', this.props.mode)
  }

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

const mapStateToProps = (state: any) => ({
  mode: state.theme.mode
})

const mapDispatchToProps = (dispatch: any) => ({
  switchTheme: (mode: string) => {
    dispatch(switchThemeCreator(mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)