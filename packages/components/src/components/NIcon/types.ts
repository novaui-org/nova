import NovaIcons from '@nova/icons'

export type NIconName = keyof typeof NovaIcons

export interface NIconProps {
  name: NIconName
  size?: string
  color?: string
}
