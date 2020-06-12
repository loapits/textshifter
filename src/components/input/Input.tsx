import React, { ChangeEvent } from 'react'
import style from '../../style/input.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'

interface text {
  edit: any,
  text: string, 
  copied: boolean, 
  copyToClipboard: any,
  enterText: (event: ChangeEvent<HTMLTextAreaElement>) => void, 
  saveFileText:  () => void
}

export const Input: React.FC<text> = ({edit, text, copied, copyToClipboard, enterText, saveFileText}) => (
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