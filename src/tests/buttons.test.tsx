import React from 'react'
import { create } from 'react-test-renderer'
import { Buttons } from '../components/buttons/Buttons'

describe('Buttons presentation component:', () => {
  const props = {
    edit: {
      textUpperCase: () => {},
      textLowerCase: () => {},
      firstTitle: () => {},
      inverseRegister: () => {},
      startAnUpperCase: () => {},
      asSentence: () => {},
      replaceText: () => {}
    }
  }

  describe('Amount elements:', () => {
    const newProps = {
      ...props,
      edit: {
        ...props.edit,
        textUpperCase: () => {},
        textLowerCase: () => {},
        firstTitle: () => {},
        inverseRegister: () => {},
        startAnUpperCase: () => {},
        asSentence: () => {},
        replaceText: () => {}
      }
    }
    const component = create(<Buttons {...newProps.edit}/>) 
    const root = component.root
    const buttons = root.findAllByType('button')
    
    it('Must be 8 buttons', () => {
      expect(buttons).toHaveLength(7)
    })
  })

  describe('Pros of buttons must be appropriate:', () => {
    const newProps = {
      ...props,
      edit: {
        ...props.edit,
        textUpperCase: () => {},
        textLowerCase: () => {},
        firstTitle: () => {},
        inverseRegister: () => {},
        startAnUpperCase: () => {},
        asSentence: () => {},
        replaceText: () => {}
      }
    }
    const component = create(<Buttons {...newProps.edit}/>)
    const root = component.root

    it('In first button', () => {
      const button1 = root.findAllByType('button')[0]

      expect(button1.props.children).toBe('Uppercase')
      expect(button1.props.onClick).toBe(newProps.edit.textUpperCase)
    })

    it('In second button', () => {
      const button2 = root.findAllByType('button')[1]

      expect(button2.props.children).toBe('Lowercase')
      expect(button2.props.onClick).toBe(newProps.edit.textLowerCase)
    })
  
    it('In third button', () => {
      const button3 = root.findAllByType('button')[2]

      expect(button3.props.children).toContain('First title')
      expect(button3.props.onClick).toBe(newProps.edit.firstTitle)
    })
  
    it('In fourth button', () => {
      const button4 = root.findAllByType('button')[3]

      expect(button4.props.children).toBe('Register Inversion')
      expect(button4.props.onClick).toBe(newProps.edit.inverseRegister)
    })
  
    it('In the fifth button', () => {
      const button5 = root.findAllByType('button')[4]

      expect(button5.props.children).toBe('Start an upper case')
      expect(button5.props.onClick).toBe(newProps.edit.startAnUpperCase)
    })
  
    it('In the six button', () => {
      const button6 = root.findAllByType('button')[5]

      expect(button6.props.children).toBe('As in the sentence')
      expect(button6.props.onClick).toBe(newProps.edit.asSentence)
    })
  
    it('In the seventh button', () => {
      const button7 = root.findAllByType('button')[6]
      
      expect(button7.props.children).toBe('Eng ⇄ Ru')
      expect(button7.props.onClick).toBe(newProps.edit.replaceText)
    })
  })
})