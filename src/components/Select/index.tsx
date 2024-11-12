import React, { useEffect, useRef, useState } from 'react'
import { ComponentProps } from '../../@types/component.props'
import Tag from '../Tag'
import './Select.scss'

interface Option {
  value: string | number
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<ComponentProps, 'size'> {
  options: Option[]
  value?: string | string[]
  defaultValue?: string | string[]
  placeholder?: string
  multiple?: boolean
  searchable?: boolean
  disabled?: boolean
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
  onChange?: (value: string | string[]) => void
  onSearch?: (searchText: string) => void
  renderOption?: (option: Option) => React.ReactNode
  clearable?: boolean
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  defaultValue,
  placeholder = 'Select...',
  multiple = false,
  searchable = false,
  disabled = false,
  loading = false,
  size = 'medium',
  color = 'primary',
  onChange,
  onSearch,
  renderOption,
  clearable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [selectedValues, setSelectedValues] = useState<string[]>(
    multiple
      ? (value as string[]) || (defaultValue as string[]) || []
      : value || defaultValue
        ? [(value as string) || (defaultValue as string)]
        : []
  )
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(Array.isArray(value) ? value : [value as string])
    }
  }, [value])

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchText.toLowerCase()))

  const handleOptionClick = (optionValue: string) => {
    if (disabled || loading) return

    let newValues: string[]
    if (multiple) {
      newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue]
    } else {
      newValues = [optionValue]
      setIsOpen(false)
    }

    setSelectedValues(newValues)
    onChange?.(multiple ? newValues : newValues[0])
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedValues([])
    onChange?.(multiple ? [] : '')
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)
    onSearch?.(value)
  }

  const handleRemoveTag = (valueToRemove: string) => {
    const newValues = selectedValues.filter((v) => v !== valueToRemove)
    setSelectedValues(newValues)
    onChange?.(multiple ? newValues : newValues[0])
  }

  const getDisplayValue = () => {
    if (selectedValues.length === 0) return placeholder

    const selectedOptions = options.filter((opt) => selectedValues.includes(opt.value.toString()))

    if (!multiple) {
      return selectedOptions[0]?.label || placeholder
    }

    return (
      <div className='select-tags'>
        {selectedOptions.map((option) => (
          <Tag
            key={option.value}
            label={option.label}
            color={color}
            size={size}
            removable
            onClick={() => handleRemoveTag(option.value.toString())}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      ref={selectRef}
      className={`
        select 
        select-${size} 
        select-${color}
        ${isOpen ? 'open' : ''} 
        ${disabled ? 'disabled' : ''} 
        ${loading ? 'loading' : ''}
        ${multiple ? 'is-multiple' : ''}
        ${multiple && selectedValues.length > 0 ? 'has-value' : ''}
      `}>
      <div className='select-trigger' onClick={() => !disabled && !loading && setIsOpen(!isOpen)}>
        <div className='select-value'>{loading ? 'Loading...' : getDisplayValue()}</div>

        {clearable && selectedValues.length > 0 && !disabled && !loading && (
          <button className='select-clear' onClick={handleClear} type='button'>
            ×
          </button>
        )}

        <div className={`select-arrow ${isOpen ? 'open' : ''}`}>▼</div>
      </div>

      {isOpen && (
        <div className='select-dropdown'>
          {searchable && (
            <div className='select-search'>
              <input type='text' value={searchText} onChange={handleSearch} placeholder='Search...' autoFocus />
            </div>
          )}

          <div className='select-options'>
            {filteredOptions.length === 0 ? (
              <div className='select-no-options'>No options found</div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`
                    select-option
                    ${selectedValues.includes(option.value.toString()) ? 'selected' : ''}
                    ${option.disabled ? 'disabled' : ''}
                  `}
                  onClick={() => !option.disabled && handleOptionClick(option.value.toString())}>
                  {renderOption ? renderOption(option) : option.label}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Select
