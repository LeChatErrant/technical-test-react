import { Paper } from '@mui/material'
import styled from 'styled-components'

export const CalculatorContainer = styled(Paper)`
  height: 90%;
  width: 30%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const InputScreen = styled.text`
  padding: 5%;
  font-size: 40px;
  letter-spacing: 0.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`

export const ResultScreen = styled.text`
  padding: 5%;
  font-size: 32px;
  color: gray;
  white-space: nowrap;
`
