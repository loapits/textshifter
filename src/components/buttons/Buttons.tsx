import React from 'react'
import style from '../../style/button.module.scss'
import { IButton } from '../../interfaces/buttons_interface'

/**
 * @param props take callback and data from container component.
 * @returns div with nested button tags which take from `props` a callbacks for changing.
 */
export const Buttons: React.FC<IButton> = (props) => (
  <div className={`button ${style.buttons}`}>
    <button type="button" onClick={props.textUpperCase} aria-label="Convert text to uppercase">Uppercase</button>
    <button type="button" onClick={props.textLowerCase} aria-label="Convert text to lowercase">Lowercase</button>
    <button type="button" onClick={props.firstTitle} aria-label="Convert first letter of text to uppercase">First title</button>
    <button type="button" onClick={props.inverseRegister} aria-label="Inverting case of text">Register Inversion</button>
    <button type="button" onClick={props.startAnUpperCase} aria-label="Convert first letter of every word to uppercase">Start an upper case</button>
    <button type="button" onClick={props.asSentence} aria-label="Convert text how in the sentence">As in the sentence</button>
    <button type="button" onClick={props.replaceText} aria-label="If text wrote on ">Eng ⇄ Ru</button>
  </div>
)