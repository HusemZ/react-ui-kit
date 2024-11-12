import React, { useState } from 'react'
import Select from '../components/Select'

interface Option {
  value: string | number
  label: string
  disabled?: boolean
}

interface SelectSections {
  basic: Option[]
  sizes: Option[]
  colors: Option[]
  countries: Option[]
  users: Option[]
}

const SelectPage: React.FC = () => {
  type SelectColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'default'

  const initialOptions: SelectSections = {
    basic: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    sizes: [
      { value: 'xs', label: 'Extra Small' },
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ],
    colors: [
      { value: 'primary', label: 'Primary' },
      { value: 'secondary', label: 'Secondary' },
      { value: 'info', label: 'Info' },
      { value: 'success', label: 'Success' },
      { value: 'warning', label: 'Warning' },
      { value: 'danger', label: 'Danger' },
    ],
    countries: [
      { value: 'tr', label: 'Turkey' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'jp', label: 'Japan' },
    ],
    users: [
      { value: '1', label: 'John Doe', disabled: false },
      { value: '2', label: 'Jane Smith', disabled: true },
      { value: '3', label: 'Bob Johnson', disabled: false },
      { value: '4', label: 'Alice Brown', disabled: false },
      { value: '5', label: 'Charlie Wilson', disabled: true },
    ],
  }

  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string | string[]
  }>({})

  const handleChange = (section: string) => (value: string | string[]) => {
    setSelectedValues((prev) => ({
      ...prev,
      [section]: value,
    }))
  }

  return (
    <div className='container'>
      <h1>Select Component Showcase</h1>

      <div className='grid grid-cols-2 gap-6'>
        <div className='card'>
          <div className='card-title'>Basic Select</div>
          <div className='card-body'>
            <Select
              options={initialOptions.basic}
              value={selectedValues.basic}
              placeholder='Choose an option'
              onChange={handleChange('basic')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Multiple Select</div>
          <div className='card-body'>
            <Select
              options={initialOptions.basic}
              value={selectedValues.multiple}
              placeholder='Choose multiple options'
              multiple
              searchable
              color='success'
              onChange={handleChange('multiple')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Sizes</div>
          <div className='card-body space-y-4'>
            <Select
              options={initialOptions.sizes}
              value={selectedValues.sizeSmall}
              placeholder='Small size'
              size='small'
              onChange={handleChange('sizeSmall')}
            />
            <Select
              options={initialOptions.sizes}
              value={selectedValues.sizeMedium}
              placeholder='Medium size'
              size='medium'
              onChange={handleChange('sizeMedium')}
            />
            <Select
              options={initialOptions.sizes}
              value={selectedValues.sizeLarge}
              placeholder='Large size'
              size='large'
              onChange={handleChange('sizeLarge')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Colors</div>
          <div className='card-body space-y-4'>
            {(['primary', 'secondary', 'info', 'success', 'warning', 'danger'] as SelectColor[]).map((color) => (
              <Select
                key={color}
                options={initialOptions.colors}
                value={selectedValues[`color${color}`]}
                placeholder={`${color.charAt(0).toUpperCase() + color.slice(1)} color`}
                color={color}
                onChange={handleChange(`color${color}`)}
              />
            ))}
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Searchable Select</div>
          <div className='card-body'>
            <Select
              options={initialOptions.countries}
              value={selectedValues.searchable}
              placeholder='Search countries'
              searchable
              onChange={handleChange('searchable')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Disabled Options</div>
          <div className='card-body'>
            <Select
              options={initialOptions.users}
              value={selectedValues.disabled}
              placeholder='Select users'
              onChange={handleChange('disabled')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Loading State</div>
          <div className='card-body'>
            <Select
              options={initialOptions.basic}
              value={selectedValues.loading}
              placeholder='Loading...'
              loading
              onChange={handleChange('loading')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Disabled State</div>
          <div className='card-body'>
            <Select
              options={initialOptions.basic}
              value={selectedValues.disabled}
              placeholder='Disabled select'
              disabled
              onChange={handleChange('disabled')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Custom Option Render</div>
          <div className='card-body'>
            <Select
              options={initialOptions.countries}
              value={selectedValues.customRender}
              placeholder='Select with custom rendering'
              onChange={handleChange('customRender')}
              renderOption={(option) => (
                <div className='d-flex align-center'>
                  <img
                    src={`/flags/${option.value}.png`}
                    alt={option.label}
                    style={{ marginRight: '5px' }}
                    width={20}
                    height={20}
                  />
                  {option.label}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectPage
