import { ReactNode } from 'react'

import { KeyboardProps } from '@components/Keyboard/props'
import { KeyboardContainer } from '@components/Keyboard/styles'

export default function Keyboard({
  children,
  columns,
}: KeyboardProps & { children: ReactNode }) {
  return <KeyboardContainer columns={columns}>{children}</KeyboardContainer>
}
