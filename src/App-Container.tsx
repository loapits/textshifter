import React from 'react'
import './style/index.scss'
import { switchThemeCreator } from './state/switch-theme-reducer'
import { connect } from 'react-redux'
import { App } from './App'
import { AppContainerTypes } from './types'

/**
 * App Container Class component. 
 * 
 * @param {void} switchTheme callback, which made for dispatch action creator
 * @returns {Component} presentational App component
 */
class AppContainer extends React.Component<AppContainerTypes> {

  /** 
    * When state of the component will update, 
    * in localStorage will be added a field with default theme mode. 
    * 
    * @param {string} theme before updating, this value is taken from localStorage 
    * or set by default
    */
  componentDidUpdate() {
    localStorage.setItem('mode', this.props.mode)
  }

  /**
    * In method switchTheme() checking condition:
    * 
    * if mode == light, set mode dark, else mode == light
    * 
    * @param {string} theme value of theme mode
    * @returns {void} new theme mode
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
 * In function, mapStateToProps We take the state for this component
 * theme: this is a theme mode, which located in themeReducer
 * 
 * @param {any} state is a state this component
 * @param {string} theme it a theme mode of the app
 */
const mapStateToProps = (state: any) => ({
  mode: state.theme.mode
})

/**
 * In mapDispatchToProps, we dispatch callbacks to the store
 * 
 * @param {any} dispatch callback for updating store
 * @param {string} mode it a theme mode of the app
 * @param {void} switchTheme callback, which dispatches the value of mode to the store
 */
const mapDispatchToProps = (dispatch: any) => ({
  switchTheme: (mode: string) => {
    dispatch(switchThemeCreator(mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)