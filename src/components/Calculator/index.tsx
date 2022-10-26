import { useTheme } from '@mui/material'
import mathjs from 'mathjs'
import { useState } from 'react'

import {
  CalculatorContainer,
  InputScreen,
  ResultScreen,
} from '@components/Calculator/styles'
import Key from '@components/Key'
import Keyboard from '@components/Keyboard'

export default function Calculator() {
  const [result, setResult] = useState('30')
  const [input, setInput] = useState('10 x 3')
  const theme = useTheme()

  function addInput(str: string) {
    setInput(input + str)
  }

  function compute() {
    try {
      setResult(mathjs.evaluate(input))
    } catch (err) {
      setResult('Error')
    }
  }

  return (
    <CalculatorContainer elevation={3}>
      <InputScreen>{input}</InputScreen>
      <ResultScreen>{result}</ResultScreen>
      <Keyboard columns={4}>
        <Key content="AC" contentColor={theme.palette.error.main} />
        <Key content="^" contentColor={theme.palette.info.main} />
        <Key content="/" contentColor={theme.palette.info.main} />
        <Key content="DEL" contentColor={theme.palette.error.main} />

        <Key content="7" contentColor={theme.palette.text.primary} />
        <Key content="8" contentColor={theme.palette.text.primary} />
        <Key content="9" contentColor={theme.palette.text.primary} />
        <Key content="*" contentColor={theme.palette.info.main} />

        <Key content="4" contentColor={theme.palette.text.primary} />
        <Key content="5" contentColor={theme.palette.text.primary} />
        <Key content="6" contentColor={theme.palette.text.primary} />
        <Key content="-" contentColor={theme.palette.info.main} />

        <Key content="1" contentColor={theme.palette.text.primary} />
        <Key content="2" contentColor={theme.palette.text.primary} />
        <Key content="3" contentColor={theme.palette.text.primary} />
        <Key content="+" contentColor={theme.palette.info.main} />

        <Key content="PREV" contentColor={theme.palette.info.main} />
        <Key content="0" contentColor={theme.palette.text.primary} />
        <Key content="," contentColor={theme.palette.text.primary} />
        <Key content="=" contentColor={theme.palette.success.main} />
      </Keyboard>
    </CalculatorContainer>
  )
}
