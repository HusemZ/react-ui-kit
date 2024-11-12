import React from 'react'
import './Tag.scss'
import { ComponentProps } from '../../@types/component.props'

interface TagProps extends ComponentProps {
  label: string
  shape?: 'rounded' | 'circle'
  onClick?: () => void
  icon?: React.ReactNode
  removable?: boolean
}

const Tag: React.FC<TagProps> = ({
  label,
  size = 'medium',
  color = 'primary',
  shape,
  onClick,
  icon,
  removable = false,
}) => {
  return (
    <span className={`tag tag-${size} tag-${color} ${shape ? 'tag-' + shape : ''} ${icon ? 'tag-icon' : ''}`}>
      {icon && <span className='icon'>{icon}</span>}
      {label}
      {removable && (
        <button
          className='tag-remove'
          onClick={(e) => {
            e.stopPropagation()
            if (onClick) onClick()
          }}>
          &times;
        </button>
      )}
    </span>
  )
}

export default Tag
