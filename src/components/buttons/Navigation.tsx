import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../style/navigation.module.scss'

export const Navigation = () => {
  return (
    <div className={style.navigation}>
      <NavLink to="/LetterCase">Case</NavLink>
      <NavLink to="/FDeel">Transliteration</NavLink>
      <NavLink to="/FDeel">Convert</NavLink>
      <select id="day">
        <option value="1">Upper case</option>
        <option value="2">Lower case</option>
        <option value="3">Capital letters</option>
        <option value="4">First title</option>
        <option value="5">Register Inversion</option>
        <option value="6">As in the sentence</option>
      </select>
    </div>
  )
}