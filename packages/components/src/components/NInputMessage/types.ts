export type NInputMessageVariant = 'positive' | 'negative' | 'default'

export interface NInputMessageProps {
  visible?: boolean
  message?: string
  variant?: NInputMessageVariant
}
