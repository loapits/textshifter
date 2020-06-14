import { SWITCH_THEME } from "../state/switch-theme-reducer"

export type switchThemeType =  {
  type: typeof SWITCH_THEME
  mode: string
}

export type ActionsTypes = switchThemeType