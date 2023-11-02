import iconMap from '../../assets/icons/index.ts'

export type NIconName = keyof typeof iconMap

export interface NIconProps {
  name: NIconName
  size?: string
  color?: string
}
