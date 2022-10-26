import { ReactNode } from 'react'

import Body from '@components/Body'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}
