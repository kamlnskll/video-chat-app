import React from 'react'
import Navbar from '../components/Navbar'

const Settings = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='bg-white border-gray-50 shadow-sm border rounded-lg w-[500px] h-[400px] mx-auto mt-28 pt-4'>
        <h1 className='text-center text-lg font-semibold'>Settings</h1>
      </div>
    </div>
  )
}

export default Settings
