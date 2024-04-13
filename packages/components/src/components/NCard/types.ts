export type NCardRadius = 'full' | 'lg' | 'md' | 'sm' | 'none'
export type NCardVariant = 'outline' | 'flat' | 'shadow-1' | 'shadow-2'
export type NCardSize = 'sm' | 'md' | 'lg'
export type NCardDivider = 'header' | 'footer' | 'both' | 'none'

export interface NCardProps {
  radius?: NCardRadius
  variant?: NCardVariant
  title?: string
  hoverable?: boolean
  size: NCardSize
  divider: NCardDivider
}
