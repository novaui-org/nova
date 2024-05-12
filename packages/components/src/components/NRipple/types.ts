import {type RippleType} from './use-ripple'

export interface NRippleProps {
  color?: string
  ripple: RippleType
}

export interface NRippleEmits {
  (e: 'ripple:start', value: { event: CustomEvent, key: string }): void

  (e: 'ripple:end', value: { event: CustomEvent, key: string }): void
}
