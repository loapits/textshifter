import React from 'react'
import './style/index.scss'
import { switchThemeCreator } from './state/switch-theme-reducer'
import { connect } from 'react-redux'
import { App } from './App'

interface text {
  theme: any,
  switchTheme: any
}

class AppContainer extends React.Component<text> {
  componentDidUpdate() {
    localStorage.setItem('mode', this.props.theme)
  }

  switchTheme = () => {
    let theme = this.props.theme
    theme === 'light' ? theme = 'dark' : theme = 'light'
    this.props.switchTheme(theme)
  }

  render() {
    return (
      <App
        mode={this.props.theme}
        switchTheme={this.switchTheme} 
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    theme: state.theme.mode
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    switchTheme: (mode: any) => {
      dispatch(switchThemeCreator(mode))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)