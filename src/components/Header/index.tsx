import DarkModeSwitch from '@components/DarkModeSwitch'
import { HeaderProps } from '@components/Header/props'

export default function Header(props: HeaderProps) {
  return (
    <header>
      <DarkModeSwitch
        width="50px"
        height="25px"
        checked={props.dark}
        onSwitch={props.toggleDarkTheme}
      />
    </header>
  )
}
