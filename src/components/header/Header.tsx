import React from 'react'
import { Logo } from './Logo'
import style from '../../style/header.module.scss'

interface text {
  toggleTheme: () => string,
  logotext: string
}

export const Header: React.FC<text> = ({toggleTheme, logotext}) => (
  <header className={style.header}>
    <a className="skip-link" href="#main">Skip to main</a>
    <Logo logotext={logotext} />
    <button aria-label="Switch theme" className="theme" onClick={toggleTheme}></button>
  </header>
)