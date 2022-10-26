import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import theme from '@utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Technical test - React </title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}
