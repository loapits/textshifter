import React from 'react'
import style from '../../style/input.module.scss'

export const Input = (props: any): any => {
  
  const convertText = (e: any) => {
    let text = e.target.value
    props.convertText(text)
  }

  return (
    <div className={style.inputs} >
      <textarea value={props.edit.enterText || ''} onChange={convertText} placeholder="Enter your text"></textarea>
      <textarea value={props.edit.editedText} readOnly placeholder="Your result"></textarea>
    </div>
  )
}