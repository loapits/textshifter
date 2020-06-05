import React from 'react'
import style from '../../style/button.module.scss'

export const Buttons = (props: any) => {
  return (
    <div className={`button ${style.buttons}`}>
      <button onClick={props.textUpperCase}>Upper case</button>
      <button onClick={props.textLowerCase}>Lower case</button>
      <button onClick={props.firstTitle}>First title</button>
      <button onClick={props.inverseRegister}>Register Inversion</button>
      <button onClick={props.startAnUpperCase}>Start an upper case</button>
      <button onClick={props.asSentence}>As in the sentence</button>
      <button onClick={props.replaceTextRu}>Eng → Ru</button>
      <button onClick={props.replaceTextEng}>Ru → Eng</button>
    </div>
  )
}