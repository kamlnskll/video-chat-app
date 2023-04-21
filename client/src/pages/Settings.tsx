import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Back } from '../static/icons/Back'

const Settings = () => {
  const [window, setWindow] = useState('')

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='bg-white border-gray-50 shadow-sm border rounded-lg w-[500px] h-[400px] mx-auto mt-28 pt-4 relative'>
        <div className={window ? `absolute w-full h-full bg-white` : `hidden`}>
          <h1
            className='cursor-pointer absolute top-0 left-4 hover:bg-gray-100 hover:rounded-full px-1'
            onClick={() => setWindow('')}
          >
            <Back />
          </h1>
          <h1 className='text-center'>{window}</h1>
        </div>
        <h1 className='text-center text-lg font-semibold'>Settings</h1>
        <div className='text-center mt-4 rounded-lg text-sm'>
          <h1
            className='border w-1/3 mx-auto rounded-lg p-1 bg-gray-200 cursor-pointer'
            onClick={() => setWindow('Edit Account')}
          >
            Edit Account
          </h1>
          <h1
            className='border w-1/3 mx-auto mt-2 rounded-lg p-1 bg-gray-200 cursor-pointer'
            onClick={() => setWindow('Preferences')}
          >
            Preferences
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Settings
