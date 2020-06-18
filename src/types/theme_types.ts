import { SWITCH_THEME } from "../state/types"

/**
 * The typization of theme reducer in state.
 * 
 * `type` - type for the `switchThemeReducer` in a redux.
 * 
 * `mode` - mode of theme.
 */
export type switchThemeType =  {
  type: typeof SWITCH_THEME
  mode: string
}

export type ActionsTypes = switchThemeType