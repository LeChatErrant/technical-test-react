import { Paper } from '@mui/material'
import styled from 'styled-components'

export const CalculatorContainer = styled(Paper)`
  height: 80%;
  width: 30%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const InputScreen = styled.text`
  font-size: 25px;
`

export const ResultScreen = styled.text`
  font-size: 20px;
  color: gray;
`
