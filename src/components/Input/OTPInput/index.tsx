import React, { useRef } from 'react'
import './OTPInput.scss'

interface OTPInputProps {
  length: number
  onChange: (otp: string) => void
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    if (value.length === 1 && index < length - 1) {
      const nextInput = inputsRef.current[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }
    const otp = inputsRef.current.map((input) => input?.value || '').join('')
    onChange(otp)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && index > 0 && !inputsRef.current[index]?.value) {
      const prevInput = inputsRef.current[index - 1]
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const setRef = (index: number) => (el: HTMLInputElement | null) => {
    inputsRef.current[index] = el
  }

  return (
    <div className='otp-input-container'>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={setRef(index)}
          type='text'
          maxLength={1}
          className='otp-input'
          onChange={(event) => handleChange(event, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  )
}

export default OTPInput
