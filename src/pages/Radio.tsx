import React, { useState } from 'react'
import Radio from '../components/Radio'

type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'default'

const RadioPage: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string
  }>({})

  const handleChange = (section: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValues((prev) => ({
      ...prev,
      [section]: e.target.value,
    }))
  }

  const colors: Color[] = ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

  return (
    <div className='container'>
      <h1>Radio Component Showcase</h1>

      <div className='grid grid-cols-2 gap-6'>
        <div className='card'>
          <div className='card-title'>Basic Radio</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <div key={option}>
                <Radio
                  label={option}
                  name='basicRadio'
                  value={option}
                  checked={selectedValues.basicRadio === option}
                  onChange={handleChange('basicRadio')}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>With Description</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <Radio
                key={option}
                label={option}
                description='This is a helpful description text that explains this option in detail'
                name='radioDescription'
                value={option}
                checked={selectedValues.radioDescription === option}
                onChange={handleChange('radioDescription')}
              />
            ))}
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Sizes</div>
          <div className='card-body space-y-4'>
            <Radio
              label='Small Radio'
              description='Small size description'
              name='radioSizes'
              value='small'
              size='small'
              checked={selectedValues.radioSizes === 'small'}
              onChange={handleChange('radioSizes')}
            />
            <Radio
              label='Medium Radio'
              description='Medium size description'
              name='radioSizes'
              value='medium'
              size='medium'
              checked={selectedValues.radioSizes === 'medium'}
              onChange={handleChange('radioSizes')}
            />
            <Radio
              label='Large Radio'
              description='Large size description'
              name='radioSizes'
              value='large'
              size='large'
              checked={selectedValues.radioSizes === 'large'}
              onChange={handleChange('radioSizes')}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Colors</div>
          <div className='card-body space-y-2'>
            {colors.map((color) => (
              <Radio
                key={color}
                label={`${color.charAt(0).toUpperCase() + color.slice(1)} Radio`}
                name='radioColors'
                value={color}
                color={color}
                checked={selectedValues.radioColors === color}
                onChange={handleChange('radioColors')}
              />
            ))}
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Bordered Style</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <Radio
                key={option}
                label={option}
                description='This option comes with a border'
                name='radioBordered'
                value={option}
                bordered
                checked={selectedValues.radioBordered === option}
                onChange={handleChange('radioBordered')}
              />
            ))}
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Button Style</div>
          <div className='card-body'>
            <div className='radio-group'>
              {options.map((option) => (
                <Radio
                  key={option}
                  label={option}
                  name='radioButton'
                  value={option}
                  color='warning'
                  buttonStyle
                  checked={selectedValues.radioButton === option}
                  onChange={handleChange('radioButton')}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Vertical Layout</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <Radio
                key={option}
                label={option}
                description='With vertical alignment'
                name='radioVertical'
                value={option}
                vertical
                checked={selectedValues.radioVertical === option}
                onChange={handleChange('radioVertical')}
              />
            ))}
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Disabled States</div>
          <div className='card-body space-y-4'>
            <Radio
              label='Disabled Unchecked'
              description='This radio is disabled'
              name='radioDisabled'
              value='disabled1'
              disabled
              checked={false}
            />
            <Radio
              label='Disabled Checked'
              description='This radio is disabled and checked'
              name='radioDisabled'
              value='disabled2'
              disabled
              checked={true}
            />
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Custom Label with Icon</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <Radio
                key={option}
                label={
                  <div className='flex items-center gap-2'>
                    <span>🎉</span>
                    <span>{option}</span>
                  </div>
                }
                name='radioCustom'
                value={option}
                checked={selectedValues.radioCustom === option}
                onChange={handleChange('radioCustom')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadioPage
