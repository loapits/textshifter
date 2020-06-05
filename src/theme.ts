import sun from './public/sun.svg'
import moon from './public/moon.svg'
import clipboard from './public/clipboard.svg'
import clipboardDark from './public/clipboard_dark.svg'
import download from './public/direct-download.svg'
import downloadDark from './public/direct_download_dark.svg'

const white = '#fff'
const smoke = '#ccc'
const gray = '#ddd'
const darkBody = '#363537'
const darkArea = '#1f2023'
const black = '#000'
const purple = '#a0a4d9'
const hovPurple = '#6c73d4'

export const lightTheme = {
  body: white,
  text: black,
  textArea: gray,
  button: gray,
  buttonTxt: black,
  themeBtn: moon,
  downloadBtn: download,
  clipboard: clipboard,
  buttonHover: smoke
}

export const darkTheme = {
  body: darkBody,
  text: smoke,
  textArea: darkArea,
  button: purple,
  buttonTxt: black,
  themeBtn: sun,
  downloadBtn: downloadDark,
  clipboard: clipboardDark,
  buttonHover: hovPurple
}