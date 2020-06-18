import { SWITCH_REGISTER } from "../state/types"

/**
 * The typization of theme reducer in state.
 * 
 * `type` - type for the `logoReducer` in a redux.
 * 
 * `logotext` - text of logo.
 */
export type switchRegisterType = {
  type: typeof SWITCH_REGISTER
  logotext: string
}

export type ActionsTypes = switchRegisterType