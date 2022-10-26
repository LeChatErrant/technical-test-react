import styled from 'styled-components'

import { KeyboardProps } from '@components/Keyboard/props'

export const KeyboardContainer = styled.div<KeyboardProps>`
  width: 100%;
  height: 70%;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.divider};
  border-radius: 50px;

  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`
