import React from 'react'
import { create } from 'react-test-renderer'
import { Input } from '../../components/input/Input'
import CopyToClipboard from 'react-copy-to-clipboard'

describe('Input presentation component:', () => {
  const props = {
    edit: {
      text: '',
      enterText: '', 
      copyToClipboard: () => {}, 
      enteredText: () => {}, 
      saveFileText: () => {}
    }
  }
  
  describe('Main checks in component:', () => {
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

    describe('Amount of elements in Input presentation component:', () => {
      it('Must be 1 <main> element in Input presentation component', () => {
        const main = root.findAllByType('main')

        expect(main.length).toBe(1)
      })
  
      it('Must be 2 <div> elements in Input presentation component', () => {
        const div = root.findAllByType('div')

        expect(div.length).toBe(1)
      })
  
      it('Must be 2 <textarea> elements in Input presentation component', () => {
        const textarea = root.findAllByType('textarea')

        expect(textarea.length).toBe(2)
      })
  
      it('Must be 2 <button> elements in Input presentation component', () => {
        const button = root.findAllByType('button')

        expect(button.length).toBe(2)
      })
      
      it('Must be 1 CopyToClipboard element in Input presentation component', () => {
        const clipboard = root.findAllByType(CopyToClipboard)

        expect(clipboard.length).toBe(1)
      })
    })
  })


  describe('Buttons element:', () => {
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

    describe('First:', () => {
      const button = root.findAllByType('button')[0]

      it('Props must be correctly', () => {
        expect(button.props.name).toBe('Copy to clipboard')
        expect(button.props.className).toBe('clipboard files')
      })
    })

    describe('Second:', () => {
      const button = root.findAllByType('button')[1]

      it('Props must be correctly', () => {
        expect(button.props.className).toBe('download saver')
        expect(button.props.onClick).toBe(newProps.edit.saveFileText)
      })
    })
  })

  describe('Textarea element:', () => {
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

    describe('First <textarea>:', () => {
      const textarea = root.findAllByType('textarea')[0]

      it('Props must be correctly', () => {
        expect(textarea.props.value).toBe(newProps.edit.enterText || '')
        expect(textarea.props.onChange).toBe(newProps.edit.enteredText)
        expect(textarea.props.readOnly).toBeUndefined()
        expect(textarea.props.placeholder).toBe('Enter your text')
      })
    })

    describe('Second <textarea>:', () => {
      const textarea = root.findAllByType('textarea')[1]

      it('Props must be correctly', () => {
        expect(textarea.props.readOnly).toBeDefined()
        expect(textarea.props.value).toBe(newProps.edit.text)
        expect(textarea.props.placeholder).toBe('Your result')
      })
    })
  })

  describe('CopyToClipboard element:', () => {
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
    
    it('Props must be correctly', () => {
      const clipboard = root.findByType(CopyToClipboard)

      expect(clipboard.props.onCopy).toBe(newProps.edit.copyToClipboard)
      expect(clipboard.props.text).toBe(newProps.edit.text)
    })

    it('Find the CopyToClipboard tag', () => {
      const clipboard = root.findByType(CopyToClipboard)
      
      expect(clipboard).toBeDefined()
    })
  })
})