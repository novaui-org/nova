import NovaIcons from '@nova/icons'

export interface NOptionsGroupProps {
  label: string
  disabled?: boolean
  error?: boolean
  success?: boolean
  errorMessage?: string
  errorIcon?: keyof typeof NovaIcons
  successIcon?: keyof typeof NovaIcons
  hint?: string
}
