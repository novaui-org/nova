import {RippleType} from 'src/components/NRipple/use-ripple.ts'

export interface NRippleProps {
  color?: string
  ripple: RippleType
}

export interface NRippleEmits {
  (e: 'ripple:start', value: { event: CustomEvent, key: string }): void

  (e: 'ripple:end', value: { event: CustomEvent, key: string }): void
}
