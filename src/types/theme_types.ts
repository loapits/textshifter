import { SWITCH_THEME } from "../state/types"

export type switchThemeType =  {
  type: typeof SWITCH_THEME
  mode: string
}

export type ActionsTypes = switchThemeType