export interface AppContainerInterface {
  mode: string
  switchTheme: (mode: string) => void
}

export interface AppInterface {
  mode: string
  switchTheme: () => void
}