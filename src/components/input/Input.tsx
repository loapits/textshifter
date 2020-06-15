import React from 'react'
import style from '../../style/input.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IInput } from '../../interfaces/input_interface'

export const Input: React.FC<IInput> = ({text, enterText, copyToClipboard, enteredText, saveFileText}) => (
  <main id="main" className={style.textarea}>
    <>
      <textarea value={enterText || ''} onChange={enteredText} placeholder="Enter your text"></textarea>
    </>
    <div className={style.resultInput}>
      <textarea value={text} readOnly placeholder="Your result"></textarea>
      <CopyToClipboard onCopy={copyToClipboard} text={text}>
        <button aria-label="Copy to clipboard"  name="Copy to clipboard" className={`clipboard ${style.files}`}></button>
      </CopyToClipboard>
      <button aria-label="Download edited text" className={`download ${style.saver}`} onClick={saveFileText}></button>
    </div>
  </main>
)
