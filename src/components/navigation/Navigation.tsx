import React from 'react'
import style from '../../style/navigation.module.scss'

export const Navigation = (props: any) => {
  return (
    <div className={style.navigation}>
      <button>Keyboard Layout</button>
      <button>Transliteration</button>
      <button>Convert to HTML</button>
      <select id="day" onChange={props.selectEdit}>
        <option value="" hidden>Change option</option>
        <option value="upperCase">Upper case</option>
        <option value="lowerCase">Lower case</option>
        <option value="firstTitle">First title</option>
        <option value="invertRegister">Register Inversion</option>
        <option value="startAnUpperCase">Start an upper case</option>
        <option value="asSentence">As in the sentence</option>
      </select>
    </div>
  )
}