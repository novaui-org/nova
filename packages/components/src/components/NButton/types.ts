import NovaIcons from '@nova/icons'

export type NButtonSize = 'sm' | 'md' | 'lg'
export type NButtonRadius = 'full' | 'lg' | 'md' | 'sm' | 'none'
export type NButtonVariant = 'solid' | 'shadow' | 'ghost' | 'outline' | 'flat'

export interface NButtonProps {
  size: NButtonSize
  disabled?: boolean
  label?: string
  iconLeft?: keyof typeof NovaIcons
  iconRight?: keyof typeof NovaIcons
  iconSize?: string
  backgroundColor?: string
  textColor?: string
  radius: NButtonRadius
  variant: NButtonVariant
  ripple?: boolean
}


export interface NButtonEmits {
  (e: 'click', value: MouseEvent): void
}
