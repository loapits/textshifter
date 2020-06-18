import React from 'react'
import { Logo } from './Logo'
import style from '../../style/header.module.scss'
import { IHeader } from '../../interfaces/header_interface'

/**
 * Header presentation component in which nested another presentation component(Logo).
 * 
 * @param logotext text of the logo.
 * @param toggleTheme callback for swithing theme.
 * @returns tag header with nested a and button tags and Logo presentation component.
 */
export const Header: React.FC<IHeader> = ({logotext, toggleTheme}) => (
  <header className={style.header}>
    <a className="skip-link" href="#main">Skip to main</a>
    <Logo logotext={logotext} />
    <button aria-label="Switch theme" className="theme" onClick={toggleTheme}></button>
  </header>
)