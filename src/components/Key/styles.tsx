import { Button } from '@mui/material'
import styled from 'styled-components'

import { KeyProps } from '@components/Key/props'

export const KeyButton = styled(Button)<KeyProps>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${(props) => props.contentColor};
  font-size: 25px;
  place-self: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;

  &:hover {
    width: 102%;
    height: 102%;
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`
