import { createContext } from 'react'
import { theme } from './theme'

export const ThemeContext = createContext(theme);
const ThemeContextProvider = ThemeContext.Provider;

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContextProviderFn = (props: ThemeContextProviderProps) => {
  return (
    <div>
      <ThemeContextProvider value={theme}>
        {props.children}
      </ThemeContextProvider>
    </div>
  )
}
