import React from 'react'
import style from '../../style/navigation.module.scss'

export const Navigation = (props: any) => {
  return (
    <div className={style.navigation}>
      <button onClick={props.textUpperCase}>Keyboard Layout</button>
      <button onClick={props.textLowerCase}>Transliteration</button>
      <button>Convert to HTML</button>
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