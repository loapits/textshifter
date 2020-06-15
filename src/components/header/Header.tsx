import React from 'react'
import { Logo } from './Logo'
import style from '../../style/header.module.scss'
import { IHeader } from '../../interfaces/header_interface'

export const Header: React.FC<IHeader> = ({toggleTheme, logotext}) => (
  <header className={style.header}>
    <a className="skip-link" href="#main">Skip to main</a>
    <Logo logotext={logotext} />
    <button aria-label="Switch theme" className="theme" onClick={toggleTheme}></button>
  </header>
)