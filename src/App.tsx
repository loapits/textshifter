import React, { useState } from 'react'
import Buttons from './components/buttons/Buttons-Container'
import Input from './components/input/InputContainer'
import HeaderContainer from './components/header/Header-Container'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global_style'
import { ThemeProvider } from 'styled-components'
import './style/index.scss'
import { Footer } from './components/footer/Footer'
import { AppTypes } from './interfaces'

export const App: React.FC<AppTypes> = ({mode, switchTheme}) => {

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