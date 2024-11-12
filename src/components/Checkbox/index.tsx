// Checkbox.tsx
import React from 'react'
import { ComponentProps } from '../../@types/component.props'
import './Checkbox.scss'

interface CheckboxProps extends ComponentProps {
  label?: string | React.ReactNode
  description?: string
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  name?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void
  required?: boolean
  bordered?: boolean
  vertical?: boolean
  buttonStyle?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  checked = false,
  disabled = false,
  indeterminate = false,
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
  const checkboxRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <label
      className={`
        checkbox-container 
        checkbox-${size} 
        checkbox-${color}
        ${disabled ? 'disabled' : ''}
        ${bordered ? 'bordered' : ''}
        ${vertical ? 'vertical' : ''}
        ${buttonStyle ? 'button-style' : ''}
        ${indeterminate ? 'indeterminate' : ''}
      `}
      onClick={onClick}>
      <input
        ref={checkboxRef}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {buttonStyle ? (
        <div className='checkbox-wrapper'>
          {(label || description) && (
            <div className='checkbox-content'>
              {label && (
                <span className='checkbox-label'>
                  {label}
                  {required && <span className='required-mark'>*</span>}
                </span>
              )}
              {description && <span className='checkbox-description'>{description}</span>}
            </div>
          )}
        </div>
      ) : (
        <>
          <span className='checkbox-control' />
          {(label || description) && (
            <div className='checkbox-content'>
              {label && (
                <span className='checkbox-label'>
                  {label}
                  {required && <span className='required-mark'>*</span>}
                </span>
              )}
              {description && <span className='checkbox-description'>{description}</span>}
            </div>
          )}
        </>
      )}
    </label>
  )
}

export default Checkbox
