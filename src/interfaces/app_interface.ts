export interface IAppContainer {
  mode: string
  switchTheme: (mode: string) => void
}

export interface IApp {
  mode: string
  switchTheme: () => void
}