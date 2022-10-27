import { useTheme } from '@mui/material'
import { evaluate } from 'mathjs'
import { useState } from 'react'

import {
  CalculatorContainer,
  InputScreen,
  ResultScreen,
} from '@components/Calculator/styles'
import Key from '@components/Key'
import Keyboard from '@components/Keyboard'

export default function Calculator() {
  const theme = useTheme()
  const [result, setResult] = useState('0')
  const [input, setInput] = useState(' ')

  const [previous, setPrevious] = useState('')

  function addInput(str: string) {
    setInput(input + str)
  }

  function compute() {
    try {
      setPrevious(input)
      setResult(evaluate(input))
    } catch (err) {
      console.log(err)
      setResult('Error')
    }
  }

  function erase() {
    if (input.length > 0) {
      setInput(input.slice(0, -1))
    }
  }

  function clear() {
    setInput(' ')
    setResult('0')
  }

  function retrievePrevious() {
    setResult('0')
    setInput(previous)
  }

  return (
    <CalculatorContainer elevation={3}>
      <InputScreen>{input}</InputScreen>
      <ResultScreen>{result}</ResultScreen>
      <Keyboard columns={4}>
        <Key
          content="AC"
          contentcolor={theme.palette.error.main}
          onClick={clear}
        />
        <Key
          content="^"
          contentcolor={theme.palette.info.main}
          onClick={() => addInput('^')}
        />
        <Key
          content="/"
          contentcolor={theme.palette.info.main}
          onClick={() => addInput('/')}
        />
        <Key
          content="DEL"
          contentcolor={theme.palette.error.main}
          onClick={erase}
        />

        <Key
          content="7"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('7')}
        />
        <Key
          content="8"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('8')}
        />
        <Key
          content="9"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('9')}
        />
        <Key
          content="*"
          contentcolor={theme.palette.info.main}
          onClick={() => addInput('*')}
        />

        <Key
          content="4"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('4')}
        />
        <Key
          content="5"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('5')}
        />
        <Key
          content="6"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('6')}
        />
        <Key
          content="-"
          contentcolor={theme.palette.info.main}
          onClick={() => addInput('-')}
        />

        <Key
          content="1"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('1')}
        />
        <Key
          content="2"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('2')}
        />
        <Key
          content="3"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('3')}
        />
        <Key
          content="+"
          contentcolor={theme.palette.info.main}
          onClick={() => addInput('+')}
        />

        <Key
          content="PREV"
          contentcolor={theme.palette.info.main}
          onClick={retrievePrevious}
        />
        <Key
          content="0"
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('0')}
        />
        <Key
          content=","
          contentcolor={theme.palette.text.primary}
          onClick={() => addInput('.')}
        />
        <Key
          content="="
          contentcolor={theme.palette.success.main}
          onClick={compute}
        />
      </Keyboard>
    </CalculatorContainer>
  )
}
