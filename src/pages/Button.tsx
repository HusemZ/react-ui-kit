import React from 'react'
import Button from '../components/Button'

const ButtonPage = () => {
  return (
    <div className='container'>
      <h1>Button Page</h1>

      <div className='grid-cols-2 gap-4'>
        <div className='card'>
          <div className='card-title'>Sizes</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Button size='small'>Small</Button>
              <Button size='medium'>Medium</Button>
              <Button size='large'>Large</Button>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Colors</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Button color='primary'>Primary</Button>
              <Button color='secondary'>Secondary</Button>
              <Button color='info'>Info</Button>
              <Button color='success'>Success</Button>
              <Button color='warning'>Warning</Button>
              <Button color='danger'>Danger</Button>
              <Button color='default'>Default</Button>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Shape</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Button>Normal</Button>
              <Button shape='rounded'>Rounded</Button>
              <Button shape='circle' icon={<img src='/download.png' alt='circle' />} />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Status</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              <Button>Normal</Button>
              <Button pending>Pending</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
