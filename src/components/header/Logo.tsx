import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../style/header.module.scss'
import logo from '../../public/logo.svg'
import { LogoTypes } from '../../interfaces'


export const Logo: React.FC<LogoTypes> = ({logotext}) => (
  <div className={style.logo}>
    <NavLink className={style.img} to="./"><img src={logo} alt="logo the app"/></NavLink>
    <NavLink className={style.txt} to="./"><span>{logotext}</span></NavLink>
  </div>
)