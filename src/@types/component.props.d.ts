export type ComponentSize = 'small' | 'medium' | 'large'
export type ComponentColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'default'
export type ComponentVariant = 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link'

export interface ComponentProps {
  size?: ComponentSize
  color?: ComponentColor
  variant?: ComponentVariant
}
