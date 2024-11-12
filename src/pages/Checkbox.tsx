import React, { useState } from 'react'
import Checkbox from '../components/Checkbox'

type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'default'

const CheckboxPage: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: boolean | string[]
  }>({
    multipleCheckbox: [],
  })

  const handleChange = (section: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValues((prev) => ({
      ...prev,
      [section]: e.target.checked,
    }))
  }

  const handleMultipleChange = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValues = selectedValues.multipleCheckbox as string[]
    let newValues: string[]

    if (e.target.checked) {
      newValues = [...currentValues, value]
    } else {
      newValues = currentValues.filter((v) => v !== value)
    }

    setSelectedValues((prev) => ({
      ...prev,
      multipleCheckbox: newValues,
    }))
  }

  const colors: Color[] = ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

  return (
    <div className='container'>
      <h1>Checkbox Component Showcase</h1>

      <div className='grid grid-cols-2 gap-6'>
        {/* Basic Checkbox */}
        <div className='card'>
          <div className='card-title'>Basic Checkbox</div>
          <div className='card-body'>
            <Checkbox
              label='Single Checkbox'
              checked={!!selectedValues.basicCheckbox}
              onChange={handleChange('basicCheckbox')}
            />
          </div>
        </div>

        {/* With Description */}
        <div className='card'>
          <div className='card-title'>With Description</div>
          <div className='card-body'>
            <Checkbox
              label='Checkbox with Description'
              description='This is a helpful description text that explains this checkbox in detail'
              checked={!!selectedValues.withDescription}
              onChange={handleChange('withDescription')}
            />
          </div>
        </div>

        {/* Sizes */}
        <div className='card'>
          <div className='card-title'>Sizes</div>
          <div className='card-body space-y-4'>
            <Checkbox
              label='Small Checkbox'
              description='Small size description'
              size='small'
              checked={!!selectedValues.checkboxSmall}
              onChange={handleChange('checkboxSmall')}
            />
            <Checkbox
              label='Medium Checkbox'
              description='Medium size description'
              size='medium'
              checked={!!selectedValues.checkboxMedium}
              onChange={handleChange('checkboxMedium')}
            />
            <Checkbox
              label='Large Checkbox'
              description='Large size description'
              size='large'
              checked={!!selectedValues.checkboxLarge}
              onChange={handleChange('checkboxLarge')}
            />
          </div>
        </div>

        {/* Colors */}
        <div className='card'>
          <div className='card-title'>Colors</div>
          <div className='card-body space-y-2'>
            {colors.map((color) => (
              <Checkbox
                key={color}
                label={`${color.charAt(0).toUpperCase() + color.slice(1)} Checkbox`}
                color={color}
                checked={!!selectedValues[`checkbox${color}`]}
                onChange={handleChange(`checkbox${color}`)}
              />
            ))}
          </div>
        </div>

        {/* Bordered Style */}
        <div className='card'>
          <div className='card-title'>Bordered Style</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <Checkbox
                key={option}
                label={option}
                description='With borders'
                bordered
                checked={!!selectedValues[`bordered${option}`]}
                onChange={handleChange(`bordered${option}`)}
              />
            ))}
          </div>
        </div>

        {/* Button Style */}
        <div className='card'>
          <div className='card-title'>Button Style</div>
          <div className='card-body'>
            <div className='checkbox-group'>
              {options.map((option) => (
                <Checkbox
                  key={option}
                  label={option}
                  buttonStyle
                  checked={!!selectedValues[`button${option}`]}
                  onChange={handleChange(`button${option}`)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Multiple Selection */}
        <div className='card'>
          <div className='card-title'>Multiple Selection</div>
          <div className='card-body space-y-2'>
            <Checkbox
              label='Select All'
              indeterminate={
                (selectedValues.multipleCheckbox as string[]).length > 0 &&
                (selectedValues.multipleCheckbox as string[]).length < options.length
              }
              checked={(selectedValues.multipleCheckbox as string[]).length === options.length}
              onChange={(e) => {
                setSelectedValues((prev) => ({
                  ...prev,
                  multipleCheckbox: e.target.checked ? options : [],
                }))
              }}
            />
            <div className='ml-8 space-y-2'>
              {options.map((option) => (
                <Checkbox
                  key={option}
                  label={option}
                  checked={(selectedValues.multipleCheckbox as string[]).includes(option)}
                  onChange={handleMultipleChange(option)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Layout */}
        <div className='card'>
          <div className='card-title'>Vertical Layout</div>
          <div className='card-body space-y-2'>
            <Checkbox
              label='Vertical Checkbox'
              description='With vertical alignment of content'
              vertical
              checked={!!selectedValues.vertical}
              onChange={handleChange('vertical')}
            />
          </div>
        </div>

        {/* Disabled States */}
        <div className='card'>
          <div className='card-title'>Disabled States</div>
          <div className='card-body space-y-4'>
            <Checkbox label='Disabled Unchecked' description='This checkbox is disabled' disabled checked={false} />
            <Checkbox
              label='Disabled Checked'
              description='This checkbox is disabled and checked'
              disabled
              checked={true}
            />
            <Checkbox
              label='Disabled Indeterminate'
              description='This checkbox is disabled and indeterminate'
              disabled
              indeterminate
              checked={false}
            />
          </div>
        </div>

        {/* Custom Label with Icon */}
        <div className='card'>
          <div className='card-title'>Custom Label with Icon</div>
          <div className='card-body space-y-2'>
            {options.map((option) => (
              <Checkbox
                key={option}
                label={
                  <div className='flex items-center gap-2'>
                    <span>✨</span>
                    <span>{option}</span>
                  </div>
                }
                checked={!!selectedValues[`custom${option}`]}
                onChange={handleChange(`custom${option}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckboxPage
