/**
 * Interface for App contaner component.
 * 
 * `mode` - mode of theme.
 * `switchTheme` - callback for switching theme.
 */
export interface IAppContainer {
  mode: string
  switchTheme: (mode: string) => void
}

/**
 * Interface for App presentation component.
 * 
 * `mode` - mode of theme.
 * `switchTheme` - callback for switching theme.
 */
export interface IApp {
  mode: string
  switchTheme: () => void
}