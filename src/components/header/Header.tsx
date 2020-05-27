import React from 'react'
import logo from '../../public/logo.svg'
import style from '../../style/header.module.scss'
import { SwitchTheme } from '../../common/theme/SwitchTheme'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <NavLink to="./"><img src={logo} alt="logo the app"/></NavLink>
        <NavLink to="./"><span>textshifter</span></NavLink>
      </div>
      <SwitchTheme />
    </header>
  )
}