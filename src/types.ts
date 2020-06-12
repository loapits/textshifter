/**
 * App class component interface
 * 
 * @param {string} mode theme mode value
 * @param {void} switchTheme callback for changing a theme mode
 */
export interface AppContainerTypes {
  mode: string,
  switchTheme: (mode: string) => void
}

export interface AppTypes {
  mode: string,
  switchTheme: () => void
}