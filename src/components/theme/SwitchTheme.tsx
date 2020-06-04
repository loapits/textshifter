import React from 'react'
import '../../style/theme.scss'

export const SwitchTheme = (props: any) => {
  return (
    <div>
      <button onClick={props.switchTheme} className={props.themeName === 'light' ? 'switchThemelight': 'switchThemeDark'}></button>
    </div>
  )
}
