import React from 'react'
import style from '../../style/input.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IInput } from '../../interfaces/input_interface'

/**
 * Input presentation component.
 * 
 * @param copied boolean value, which becomes true if click on copyToClipboardButton button.
 * @param editedText text which was edit and comes to textarea.
 * @param enterText text which was entered.
 * @param copyToClipboard callback for copying to clipboard.
 * @param enteredText callback for sending every symbol from the textarea to redux store. 
 * @param saveFileText callback for saving edited text in .txt file.
 * @returns tag main with nested tags.
 */
export const Input: React.FC<IInput> = ({copied, editedText, enterText, copyToClipboard, enteredText, saveFileText}) => (
  <main id="main" className={style.textarea}>
    <>
      <textarea value={enterText || ''} onChange={enteredText} placeholder="Enter your text"></textarea>
    </>
    <div className={style.resultInput}>
      <textarea value={editedText} readOnly placeholder="Your result"></textarea>
      <CopyToClipboard onCopy={copyToClipboard} text={editedText}>
        {copied
          ? <button aria-label="Copy to clipboard" name="Copy to clipboard" className={`clipboardSucc ${style.files}`}></button> 
          : <button aria-label="Copy to clipboard" name="Copy to clipboard" className={`clipboard ${style.files}`}></button>
        }
      </CopyToClipboard>
      <button aria-label="Download edited text" className={`download ${style.saver}`} onClick={saveFileText}></button>
    </div>
  </main>
)
