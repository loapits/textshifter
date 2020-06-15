import React from 'react'
import { create } from 'react-test-renderer'
import { Input } from '../../components/input/Input'

describe('Input presentation component', () => {
  const props = {
    edit: {
      text: '',
      enterText: '', 
      copyToClipboard: () => {}, 
      enteredText: () => {}, 
      saveFileText: () => {}
    }
  }

  it('should be 2 <textarea> in Input presentation component', () => {
    const newProps = {
      ...props, 
      edit: {
        ...props.edit,
        text: '',
        enterText: '', 
        copyToClipboard: () => {}, 
        enteredText: () => {}, 
        saveFileText: () => {}
      }
    }

    const component = create(<Input {...newProps.edit} />)
    const root = component.root
    const textarea = root.findAllByType('textarea')
    expect(textarea.length).toBe(2)
  })
})