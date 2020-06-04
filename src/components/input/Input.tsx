import React from 'react'
import style from '../../style/input.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'

export const Input = (props: any): any => {

  const convertText = (e: any) => {
    let text = e.target.value
    props.convertText(text)
  }

  return (
    <div className={style.inputs}>
      <textarea value={props.edit.enterText || ''} onChange={convertText} placeholder="Enter your text"></textarea>
      <div className={style.resultInput}>
        <textarea value={props.edit.editedText} readOnly placeholder="Your result"></textarea>
        <CopyToClipboard onCopy={props.copyToClipboard} text={props.text}>
          <button className={style.files}></button>
        </CopyToClipboard>
        <button className={style.saver} onClick={props.saveFileText}></button>
      </div>
    </div>
  )
}