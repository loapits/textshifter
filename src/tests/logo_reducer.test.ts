import { logoReducer } from "../state/logo-reducer"

describe('Logo reducer:', () => {
  const state = {
    logotext: 'Textshifter'
  }
  it('Check that state initialized', () => {
    const action: any = {}
    expect(logoReducer(undefined, action)).toEqual(state)
  })
})