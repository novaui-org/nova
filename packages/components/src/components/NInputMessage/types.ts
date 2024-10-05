export type NInputMessageVariant = 'positive' | 'negative' | 'default'

export interface NInputMessageProps {
  message?: string
  variant?: NInputMessageVariant
}
