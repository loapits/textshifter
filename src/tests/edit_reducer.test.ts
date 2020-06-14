import { editTextReducer } from '../state/edit-text-reducer'
import letters from '../state/letters.json'
import { UPPER_CASE, LOWER_CASE, FIRST_TITLE, REGISTER_INVRESION, START_AN_UPPER_CASE, AS_SENTENCE, REPLASE_TEXT, SET_COPY_CLIPBOARD, INPUT_TEXT } from '../state/types'

describe('edit reducer', () => {
  const state = {
    enterText: '',
    editedText: '',
    replacer: letters.replacer,
    copied: false
  }

  it('check that state initialized', () => {
    const action: any = {}
    expect(editTextReducer(undefined, action)).toEqual(state)
  })

  it('check that every letter adding to state', () => {
    const action: any = {
      type: INPUT_TEXT,
      enterText: 'hello'
    } 
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: action.enterText,
      editedText: '',
      replacer: letters.replacer,
      copied: false
    })

    // const action = enterTextCreator('hello')
    // const newState = editTextReducer(state, action)
    // expect(newState.enterText).toBe('hello')
  })

  it('adding text to state as uppercase', () => {
    const action: any = {
      type: UPPER_CASE,
      editedText: "HELLO"
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('adding text to state as lowercase', () => {
    const action: any = {
      type: LOWER_CASE,
      editedText: "hello"
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('adding to state a text which first letter uppercase', () => {
    const action: any = {
      type: FIRST_TITLE,
      editedText: 'Text which was be edited'
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('adding to state a text in which register inverted', () => {
    const action: any = {
      type: REGISTER_INVRESION,
      editedText: 'heLllo',
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('adding to state a text in which first letter of every word uppercase', () => {
    const action: any = {
      type: START_AN_UPPER_CASE,
      editedText: 'Hello World'
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('adding to state a text in which first letter every sentence will be uppercase', () => {
    const action: any = {
      type: AS_SENTENCE,
      editedText: 'Hello world! New coder'
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('adding to state a text in which letters should be replaced eng on ru or ru on eng', () => {
    const action: any = {
      type: REPLASE_TEXT,
      editedText: 'Ghbdtn'
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: action.editedText,
      replacer: letters.replacer,
      copied: false
    })
  })

  it('after click on button property copied should be changed on true', () => {
    const action: any = {
      type: SET_COPY_CLIPBOARD,
      copied: true
    }
    expect(editTextReducer(state, action)).toEqual({
      ...state,
      enterText: '',
      editedText: '',
      replacer: letters.replacer,
      copied: true
    })
  })
})