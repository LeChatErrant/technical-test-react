import { useState } from 'react'

export default function useDarkMode(defaultValue: boolean) {
  const [dark, setDark] = useState(defaultValue)

  function saveMode(dark: boolean) {
    setDark(dark)
  }

  const toggleDarkTheme = () => saveMode(!dark)

  return { dark, toggleDarkTheme }
}
