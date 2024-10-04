export type NCheckboxSize = 'sm' | 'md' | 'lg'

export interface NCheckboxProps {
  modelValue: string[] | boolean
  value?: string
  label?: string
  name?: string
  size?: NCheckboxSize
  description?: string
  color?: string
  disabled?: boolean
}

export interface NCheckboxEmits {
  (e: 'update:modelValue', value: string[] | boolean): void
}
