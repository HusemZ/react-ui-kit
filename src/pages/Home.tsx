import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/button'}>Button</Link>
        </li>
        <li>
          <Link to={'/input'}>Input</Link>
        </li>
        <li>
          <Link to={'/tag'}>Tag</Link>
        </li>
        <li>
          <Link to={'/select'}>Select</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
