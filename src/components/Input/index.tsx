import React, { InputHTMLAttributes, useRef, useState } from 'react'
import { ComponentProps } from '../../@types/component.props'
import './Input.scss'

interface InputProps extends ComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  variant?: 'outlined' | 'filled'
}

const Input: React.FC<InputProps> = ({ label, variant, size = 'medium', color = 'primary', ...props }) => {
  const [inputLength, setInputLength] = useState(props.value ? props.value.toString().length : 0)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null!)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLength(event.target.value.length)
    if (props.onChange) {
      props.onChange(event)
    }
  }

  const togglePasswordVisibility = () => {
    if (inputRef.current) {
      setIsPasswordVisible(!isPasswordVisible)
      inputRef.current.type = isPasswordVisible ? 'password' : 'text'
    }
  }

  return (
    <div className='input-container'>
      {label && <label className='input-label'>{label}</label>}
      <input
        ref={inputRef}
        className={`input input-${size} input-${variant} input-${color}`}
        {...props}
        onChange={handleChange}
      />
      {props.maxLength && (
        <span className='input-maxlength'>
          {inputLength}/{props.maxLength}
        </span>
      )}
      {props.type === 'password' && (
        <button type='button' className='input-show-password' onClick={togglePasswordVisibility}>
          <img src={isPasswordVisible ? '/hidden.png' : '/eye.png'} alt='Show Password' />
        </button>
      )}
    </div>
  )
}

export default Input
