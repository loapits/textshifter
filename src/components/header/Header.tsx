import React from 'react'
import style from '../../style/header.module.scss'
import { Logo } from './Logo'

export const Header = (props: any) => {
  return (
    <header className={style.header}>
      <Logo logotext={props.logotext} />
    </header>
  )
}