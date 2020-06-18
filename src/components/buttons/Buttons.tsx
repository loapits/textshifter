import React from 'react'
import style from '../../style/button.module.scss'
import { IButton } from '../../interfaces/buttons_interface'

/**
 * @param props take callback and data from container component.
 * @returns div with nested button tags which take from `props` a callbacks for changing.
 */
export const Buttons: React.FC<IButton> = (props) => (
  <div className={`button ${style.buttons}`}>
    <button onClick={props.textUpperCase}>Uppercase</button>
    <button onClick={props.textLowerCase}>Lowercase</button>
    <button onClick={props.firstTitle}>First title</button>
    <button onClick={props.inverseRegister}>Register Inversion</button>
    <button onClick={props.startAnUpperCase}>Start an upper case</button>
    <button onClick={props.asSentence}>As in the sentence</button>
    <button onClick={props.replaceTextRu}>Eng → Ru</button>
    <button onClick={props.replaceTextEng}>Ru → Eng</button>
  </div>
)