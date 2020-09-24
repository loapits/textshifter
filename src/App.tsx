import React, { useState } from 'react'
import Buttons from './components/buttons/Buttons-Container'
import Input from './components/input/InputContainer'
import HeaderContainer from './components/header/Header-Container'
import './style/index.scss'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global_style'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/footer/Footer'
import { IApp } from './interfaces/app_interface'

/**
 * App presentation component. In here using a hook useState for switching theme mode.
 * 
 * @param mode it a theme mode(dark or light).
 * @param switchTheme a callback with which help to can switch the theme.
 * @returns all components in application.
 */
export const App: React.FC<IApp> = ({mode, switchTheme}) => {
  /**
   * Hook useState.
   * 
   * `theme` - it mode of theme which was set.
   * 
   * `setTheme` - function with which help to can switch mode.
   */
  const [theme, setTheme] = useState(mode)

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    switchTheme()
  }
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
          <div className="container">
            <HeaderContainer toggleTheme={toggleTheme} />
            <Input />
            <Buttons />
          </div>
          <Footer />
        </>
    </ThemeProvider>
  )
}