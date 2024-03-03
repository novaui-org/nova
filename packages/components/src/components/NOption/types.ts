export type NOptionSize = 'sm' | 'md' | 'lg'
export type NOptionType = 'checkbox' | 'radio'

export interface NOptionProps {
  checked: boolean
  value: string
  label?: string
  name?: string
  size?: NOptionSize
  description?: string
  color?: string
  disabled?: boolean
  type: NOptionType
}
