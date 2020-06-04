import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.svg'
import style from '../../style/header.module.scss'

export const Logo = (props: any) => {
  return (
    <div className={style.logo}>
      <NavLink to="./"><img src={logo} alt="logo the app"/></NavLink>
      <NavLink to="./"><span>{props.logotext}</span></NavLink>
    </div>
  )
}