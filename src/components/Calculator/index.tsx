import mathjs from 'mathjs'
import { useState } from 'react'

import {
  CalculatorContainer,
  InputScreen,
  ResultScreen,
} from '@components/Calculator/styles'
import Keyboard from '@components/Keyboard'

export default function Calculator() {
  const [result, setResult] = useState('30')
  const [input, setInput] = useState('10 x 3')

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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Keyboard>
    </CalculatorContainer>
  )
}
