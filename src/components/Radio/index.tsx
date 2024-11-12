// Radio.tsx
import React from 'react'
import { ComponentProps } from '../../@types/component.props'
import './Radio.scss'

interface RadioProps extends ComponentProps {
  label?: string | React.ReactNode
  description?: string
  checked?: boolean
  disabled?: boolean
  name?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void
  required?: boolean
  bordered?: boolean
  vertical?: boolean
  buttonStyle?: boolean
}

const Radio: React.FC<RadioProps> = ({
  label,
  description,
  checked = false,
  disabled = false,
  name,
  value,
  size = 'medium',
  color = 'primary',
  onChange,
  onClick,
  required = false,
  bordered = false,
  vertical = false,
  buttonStyle = false,
  ...props
}) => {
  return (
    <label
      className={`
        radio-container 
        radio-${size} 
        radio-${color}
        ${disabled ? 'disabled' : ''}
        ${bordered ? 'bordered' : ''}
        ${vertical ? 'vertical' : ''}
        ${buttonStyle ? 'button-style' : ''}
      `}
      onClick={onClick}>
      <input
        type='radio'
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {buttonStyle ? (
        <div className='radio-wrapper'>
          {(label || description) && (
            <div className='radio-content'>
              {label && (
                <span className='radio-label'>
                  {label}
                  {required && <span className='required-mark'>*</span>}
                </span>
              )}
              {description && <span className='radio-description'>{description}</span>}
            </div>
          )}
        </div>
      ) : (
        <>
          <span className='radio-control' />
          {(label || description) && (
            <div className='radio-content'>
              {label && (
                <span className='radio-label'>
                  {label}
                  {required && <span className='required-mark'>*</span>}
                </span>
              )}
              {description && <span className='radio-description'>{description}</span>}
            </div>
          )}
        </>
      )}
    </label>
  )
}

export default Radio
