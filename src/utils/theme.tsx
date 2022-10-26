import { createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'

export function createGlobalTheme(dark: boolean) {
  return createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 16,
    },
  })
}

export const GlobalStyles = createGlobalStyle`
  * {
    transition: color,background-color 0.2s linear !important;
  }
`
