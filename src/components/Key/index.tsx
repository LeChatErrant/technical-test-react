import { KeyProps } from '@components/Key/props'
import { KeyButton } from '@components/Key/styles'

export default function Key(props: KeyProps) {
  return (
    <KeyButton variant="contained" {...props}>
      {props.content}
    </KeyButton>
  )
}
