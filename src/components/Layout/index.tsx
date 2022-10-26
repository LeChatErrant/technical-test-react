import { ReactNode } from 'react'

import Body from '@components/Body'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { LayoutProps } from '@components/Layout/props'

export default function Layout({
  children,
  dark,
  toggleDarkTheme,
}: { children: ReactNode } & LayoutProps) {
  return (
    <>
      <Header dark={dark} toggleDarkTheme={toggleDarkTheme} />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}
