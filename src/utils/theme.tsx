import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    text: {
      primary: '#00ff00',
      secondary: '#ff0000',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
})

export default theme
