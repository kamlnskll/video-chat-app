import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/auth'
import { fetchUserData } from '../axios/userRoutes'

const Navbar = () => {
  useEffect(() => {
    fetchUserData().then((res) => {
      setUserData(res)
    })
    console.log('console log userdata in nav comp', userData)
    console.log('user contacts', userData?.contacts)
  }, [])

  const { userData, setUserData } = useContext(userContext)

  return (
    <div className='bg-gray-100 py-4 border-b'>
      <div className='text-center space-x-16'>
        <Link to={'/'} type='button' className='hover:text-blue-700'>
          Home
        </Link>
        <Link to={'/chat'} type='button' className='hover:text-blue-700'>
          Chat
        </Link>
        <Link to={'/contacts'} type='button' className='hover:text-blue-700'>
          Contacts
        </Link>
        <Link
          to={`/profile/${userData?.userName}`}
          type='button'
          className='hover:text-blue-700'
        >
          Profile
        </Link>
        <Link to={'/settings'} type='button' className='hover:text-blue-700'>
          Settings
        </Link>
      </div>
    </div>
  )
}

export default Navbar
