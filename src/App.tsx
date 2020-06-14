import React, { useState } from 'react'
import Buttons from './components/buttons/Buttons-Container'
import Input from './components/input/InputContainer'
import HeaderContainer from './components/header/Header-Container'
import './style/index.scss'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global_style'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/footer/Footer'
import { AppInterface } from './interfaces/app_interface'

export const App: React.FC<AppInterface> = ({mode, switchTheme}) => {

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