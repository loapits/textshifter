import { logoReducer } from "../state/logo-reducer"

describe('Logo reducer:', () => {
  const state = {
    logotext: 'Textshifter' as string
  }
  it('Check that state initialized', () => {
    const action: any = {}
    expect(logoReducer(undefined, action)).toEqual(state)
  })
})