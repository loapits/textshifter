import React from 'react';
import { SwitchTheme } from './SwitchTheme';
import { connect } from 'react-redux';
import { switchThemeCreator } from '../../state/switch-theme-reducer';

interface text {
  themeName: any,
  switchTheme: any
}

export class SwitchThemeContainer extends React.Component<text> {  

  switchTheme = () => {
    let themeName = this.props.themeName
    themeName === 'light' ? themeName = 'dark' : themeName = 'light'
    this.props.switchTheme(themeName)
  }

  render() {
    return (
      <SwitchTheme
        themeName={this.props.themeName} 
        switchTheme={this.switchTheme}
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    theme: state.theme,
    themeName: state.theme.currentTheme
  }
}

const mapDispatchToProps = (dispatch: any) => {
   return{
    switchTheme: (themeName: string) => {
      let action = switchThemeCreator(themeName)
      dispatch(action)
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchThemeContainer)