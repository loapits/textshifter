import { themeInitialTypes } from "../state/switch-theme-reducer";
import { editInitialTypes } from "../state/edit-text-reducer";
import { ILogo } from "../interfaces/header_interface";

export type stateType = {
  edit: editInitialTypes
  theme: themeInitialTypes
  logo: ILogo
}
