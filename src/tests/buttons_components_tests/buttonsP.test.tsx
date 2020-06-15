import React from 'react'
import { create } from 'react-test-renderer'
import { Buttons } from '../../components/buttons/Buttons'

describe('Buttons presentation component', () => {
  const props = {
    edit: {
      textUpperCase: () => {},
      textLowerCase: () => {},
      firstTitle: () => {},
      inverseRegister: () => {},
      startAnUpperCase: () => {},
      asSentence: () => {},
      replaceTextRu: () => {},
      replaceTextEng: () => {}
    }
  }
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
      replaceTextRu: () => {},
      replaceTextEng: () => {}
    }
  }
  const component = create(<Buttons {...newProps.edit}/>) 
  const root = component.root

  it('check that in button component the right number of buttons', () => {
    const buttons = root.findAllByType('button')
    expect(buttons.length).toEqual(8)
  })

  it('check first button', () => {
    const button1 = root.findAllByType('button')[0]
    expect(button1.props.children).toBe('Upper case')
    expect(button1.props.onClick).toBe(newProps.edit.textUpperCase)
  })

  it('check second button', () => {
    const button2 = root.findAllByType('button')[1]
    expect(button2.props.children).toBe('Lower case')
    expect(button2.props.onClick).toBe(newProps.edit.textLowerCase)
  })

  it('check third button', () => {
    const button3 = root.findAllByType('button')[2]
    expect(button3.props.children).toBe('First title')
    expect(button3.props.onClick).toBe(newProps.edit.firstTitle)
  })

  it('check fourth button', () => {
    const button4 = root.findAllByType('button')[3]
    expect(button4.props.children).toBe('Register Inversion')
    expect(button4.props.onClick).toBe(newProps.edit.inverseRegister)
  })

  it('check the fifth button', () => {
    const button5 = root.findAllByType('button')[4]
    expect(button5.props.children).toBe('Start an upper case')
    expect(button5.props.onClick).toBe(newProps.edit.startAnUpperCase)
  })

  it('check the six button', () => {
    const button6 = root.findAllByType('button')[5]
    expect(button6.props.children).toBe('As in the sentence')
    expect(button6.props.onClick).toBe(newProps.edit.asSentence)
  })

  it('check the seventh button', () => {
    const button7 = root.findAllByType('button')[6]
    expect(button7.props.children).toBe('Eng → Ru')
    expect(button7.props.onClick).toBe(newProps.edit.replaceTextRu)
  })

  it('check eighth button', () => {
    const button8 = root.findAllByType('button')[7]
    expect(button8.props.children).toBe('Ru → Eng')
    expect(button8.props.onClick).toBe(newProps.edit.replaceTextEng)
  })
})