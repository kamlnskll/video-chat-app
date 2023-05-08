import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/auth'
import { fetchUserData } from '../axios/userRoutes'
import { Logout } from '../static/icons/Logout'
import { Home } from '../static/icons/Home'
import { Chat } from '../static/icons/Chat'
import { Contacts } from '../static/icons/Contacts'
import { Profile } from '../static/icons/Profile'
import { Settings } from '../static/icons/Settings'
import { useLogout } from '../hooks/logout'

const Navbar = () => {
  const { userData, setUserData } = useContext(userContext)
  const { logout } = useLogout()

  useEffect(() => {
    fetchUserData().then((res) => {
      setUserData(res)
    })
    console.log('console log userdata in nav comp', userData)
    console.log('user contacts', userData?.contacts)
  }, [])

  return (
    <div className='bg-gray-100 py-4 border-b relative text-xs dark:bg-slate-800'>
      <div className='text-center text-slate-800 dark:text-white space-x-16'>
        <Link to={'/'} type='button' className='hover:text-blue-700'>
          <div>
            <Home />
            <h1>Home</h1>
          </div>
        </Link>
        <Link to={'/chat'} type='button' className='hover:text-blue-700'>
          <div>
            <Chat />
            <h1>Chat</h1>
          </div>
        </Link>
        <Link to={'/contacts'} type='button' className='hover:text-blue-700'>
          <div>
            <Contacts />
            <h1>Contacts</h1>
          </div>
        </Link>
        <Link
          to={`/profile/${userData?.userName}`}
          type='button'
          className='hover:text-blue-700'
        >
          <div>
            <Profile />
            <h1>Profile</h1>
          </div>
        </Link>
        <Link to={'/settings'} type='button' className='hover:text-blue-700'>
          <div>
            <Settings />
            <h1>Settings</h1>
          </div>
        </Link>
      </div>
      <div className='absolute top-2 right-2' onClick={logout}>
        <h1 className='hover:bg-gray-200 cursor-pointer p-2 rounded-'>
          <Logout />
        </h1>
      </div>
    </div>
  )
}

export default Navbar
