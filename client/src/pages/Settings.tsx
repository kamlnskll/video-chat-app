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
        <div className='text-center mt-4 rounded-lg text-sm'>
          <h1 className='border w-1/3 mx-auto rounded-lg p-1 bg-gray-200 cursor-pointer'>
            Edit Account
          </h1>
          <h1 className='border w-1/3 mx-auto mt-2 rounded-lg p-1 bg-gray-200 cursor-pointer'>
            Preferences
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Settings
