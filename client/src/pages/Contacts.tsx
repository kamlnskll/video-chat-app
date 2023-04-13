import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'

const Contacts = () => {
  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border bg-white w-[500px] h-[500px]'></div>
    </div>
  )
}

export default Contacts
