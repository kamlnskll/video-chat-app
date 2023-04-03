import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-100 py-4 border-b'>
      <div className='text-center space-x-16'>
        <Link to={'/'} type='button' className='hover:text-blue-700'>
          Home
        </Link>
        <button type='button' className='hover:text-blue-700'>
          Chat
        </button>
        <button type='button' className='hover:text-blue-700'>
          Contacts
        </button>
        <button type='button' className='hover:text-blue-700'>
          Profile
        </button>
        <button type='button' className='hover:text-blue-700'>
          Settings
        </button>
      </div>
    </div>
  )
}

export default Navbar
