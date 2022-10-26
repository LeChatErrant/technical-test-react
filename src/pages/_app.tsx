import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import useDarkMode from '@hooks/useDarkMode'
import { GlobalStyles, createGlobalTheme } from '@utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { dark, toggleDarkTheme } = useDarkMode(true)
  const theme = createGlobalTheme(dark)

  return (
    <>
      <Head>
        <title> Technical test - React </title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Layout dark={dark} toggleDarkTheme={toggleDarkTheme}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}
