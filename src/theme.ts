//
//File with a dunamic settings for the theme.
//

import sun from './public/mode_light.svg'
import moon from './public/mode_dark.svg'
import clipboard from './public/clipboard_light.svg'
import clipboardDark from './public/clipboard_dark.svg'
import clipboardSucc from './public/success_light.svg'
import clipboardSuccDark from './public/success_dark.svg'
import download from './public/direct-download_light.svg'
import downloadDark from './public/direct_download_dark.svg'

/**
 * Variables, which responsible for colours.
 */
const white = '#fff'
const smoke = '#ccc'
const gray = '#ddd'
const darkBody = '#363537'
const darkArea = '#1f2023'
const black = '#000'
const purple = '#a0a4d9'
const hovPurple = '#6c73d4'

/**
 * Dynamic settings of a light theme.
 */
export const lightTheme = {
  body: white,
  text: black,
  textArea: gray,
  button: gray,
  buttonTxt: black,
  themeBtn: moon,
  downloadBtn: download,
  clipboard: clipboard,
  clipboardSucc: clipboardSucc,
  buttonHover: smoke
}

/**
 * Dynamic settings of a dark theme.
 */
export const darkTheme = {
  body: darkBody,
  text: smoke,
  textArea: darkArea,
  button: purple,
  buttonTxt: black,
  themeBtn: sun,
  downloadBtn: downloadDark,
  clipboard: clipboardDark,
  clipboardSucc: clipboardSuccDark,
  buttonHover: hovPurple
}