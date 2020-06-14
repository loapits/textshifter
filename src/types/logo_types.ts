import { SWITCH_REGISTER } from "../state/logo-reducer"

export type switchRegisterType = {
  type: typeof SWITCH_REGISTER
  logotext: string
}

export type ActionsTypes = switchRegisterType