import React from 'react'
import style from '../../style/input.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'
import { InputTypes } from '../../types'

export const Input: React.FC<InputTypes> = ({edit, text, copied, copyToClipboard, enterText, saveFileText}) => (
  <main id="main" className={style.textarea}>
    <>
      <textarea value={edit.enterText || ''} onChange={enterText} placeholder="Enter your text"></textarea>
    </>
    <div className={style.resultInput}>
      <textarea value={edit.editedText} readOnly placeholder="Your result"></textarea>
      <CopyToClipboard onCopy={copyToClipboard} text={text}>
        <button aria-label="Copy to clipboard"  name="Copy to clipboard" className={`clipboard ${style.files}`}></button>
      </CopyToClipboard>
      <button aria-label="Download edited text" className={`download ${style.saver}`} onClick={saveFileText}></button>
    </div>
  </main>
)
