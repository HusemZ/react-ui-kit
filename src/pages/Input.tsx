import React from 'react'
import Input from '../components/Input'
import OTPInput from '../components/Input/OTPInput'

const InputPage = () => {
  return (
    <div className='container'>
      <h1>Input Page</h1>

      <div className='grid-cols-2 gap-4'>
        <div className='card'>
          <div className='card-title'>Sizes</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Input size='small' placeholder='Small' />
              <Input size='medium' placeholder='Medium' />
              <Input size='large' placeholder='Large' />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Color</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Input color='primary' placeholder='Primary' label='Primary' />
              <Input color='secondary' placeholder='Secondary' label='Secondary' />
              <Input color='info' placeholder='Info' label='Info' />
              <Input color='success' placeholder='Success' label='Success' />
              <Input color='warning' placeholder='Warning' label='Warning' />
              <Input color='danger' placeholder='Danger' label='Danger' />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Other</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Input placeholder='Primary' maxLength={16} />
              <Input placeholder='Primary' type='password' />
              <Input placeholder='Primary' disabled />
            </div>
            <br />
            <OTPInput length={6} onChange={(otp) => console.log(otp)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputPage
