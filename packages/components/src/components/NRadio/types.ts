export type NRadioSize = 'sm' | 'md' | 'lg'

export interface NRadioProps {
  modelValue: string
  value: string
  label?: string
  name?: string
  size?: NRadioSize
  description?: string
  color?: string
  disabled?: boolean
}

export interface NRadioEmits {
  (e: 'update:modelValue', value: string): void
}
