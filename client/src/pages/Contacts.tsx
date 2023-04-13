import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'

const Contacts = () => {
  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border bg-white w-[500px] h-[500px] mt-12 relative'>
        <h1 className='text-center font-semibold text-xl mt-4'>Contacts (0)</h1>
        <button
          type='button'
          className='border px-2 text-sm text-white rounded-lg font-semibold bg-orange-600 absolute top-5 right-4'
        >
          Add Contact
        </button>
        <div className='mt-10'>
          <h1>Contact Cards Mapped Here</h1>
        </div>
      </div>
    </div>
  )
}

export default Contacts
