/**
 * Interface for Header container component.
 * 
 * `logotext` - text of logo.
 * 
 * `toggleTheme` - callbac for switching theme.
 */
export interface IHeaderContainer {
  logotext: string
  toggleTheme: () => void
}

/**
 * Interface for Header presentation component.
 * 
 * `logotext` - text of logo.
 * 
 * `toggleTheme` - callbac for switching theme.
 */
export interface IHeader {
  logotext: string
  toggleTheme: () => void
}

/**
 * Interface for Logo presentation component.
 * 
 * `logotext` - text of logo.
 */
export interface ILogo {
  logotext: string
}