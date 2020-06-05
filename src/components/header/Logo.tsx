import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../style/header.module.scss'
import logo from '../../public/logo.svg'

export const Logo = (props: any) => {
  return (
    <div className={style.logo}>
      <NavLink className={style.img} to="./"><img src={logo} alt="logo the app"/></NavLink>
      <NavLink className={style.txt} to="./"><span>{props.logotext}</span></NavLink>
    </div>
  )
}