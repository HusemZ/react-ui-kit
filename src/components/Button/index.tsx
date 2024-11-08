import React, { ButtonHTMLAttributes } from 'react'
import { ComponentProps } from '../../@types/component.props'
import './Button.scss'

interface ButtonProps extends ComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  shape?: 'rounded' | 'circle'
  pending?: boolean
  onClick?: () => void
  icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  icon,
  size = 'medium',
  color = 'primary',
  shape,
  pending = false,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (!props.disabled && !pending && onClick) {
      onClick()
    }
  }
  return (
    <button
      className={`btn btn-${size} btn-${color} ${shape ? 'btn-' + shape : ''} ${icon ? 'btn-icon' : ''}  ${pending ? 'pending' : ''}`}
      onClick={handleClick}
      {...props}>
      {icon ? <span className='icon'>{icon}</span> : pending ? 'Pending...' : props.children}
    </button>
  )
}
export default Button
