import React, { useState } from 'react'
import { Footer } from './components/footer/Footer'
import Buttons from './components/buttons/Buttons-Container'
import Input from './components/input/InputContainer'
import HeaderContainer from './components/header/Header-Container'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import './style/index.scss'


export const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
          <div className="container">
            <HeaderContainer toggleTheme={toggleTheme}/>
            <Input />
            <Buttons />
            <Footer />
          </div>
        </>
    </ThemeProvider>
  )
}