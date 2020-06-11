import React from 'react'
import { Logo } from './Logo'
import style from '../../style/header.module.scss'

export const Header = (props: any) => {
  return (
    <header className={style.header}>
      <Logo logotext={props.logotext}  upperCase={props.upperCase}/>
      <button name="Switch theme" className="theme" onClick={props.toggleTheme}></button>
    </header>
  )
}