import { themeInitialTypes } from "../state/switch-theme-reducer";
import { editInitialTypes } from "../state/edit-text-reducer";
import { ILogo } from "../interfaces/header_interface";

/**
 * The typization of state.
 * 
 * `edit` - type of the edit reducer in combineReducers method.
 * 
 * `theme` - type of the theme reducer in combineReducers method.
 * 
 * `logo` - type of the logo reducer in combineReducers method.
 */
export type stateType = {
  edit: editInitialTypes
  theme: themeInitialTypes
  logo: ILogo
}
