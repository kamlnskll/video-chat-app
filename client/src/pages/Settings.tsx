import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { Back } from '../static/icons/Back'
import AccountEdit from '../components/AccountEdit'
import { userContext } from '../context/auth'
import { Moon, Sun } from '../static/icons/Lightmode'
import { DarkModeContext } from '../context/DarkModeContext'
import { useDarkMode } from '../hooks/useDarkMode'

const Settings = () => {
  const [window, setWindow] = useState('')
  const { userData } = useContext(userContext)

  const [themeColor, setTheme] = useDarkMode()

  const [darkMode, setDarkMode] = useState(
    themeColor === 'light' ? true : false
  )

  const toggleDarkMode = (checked: boolean) => {
    // @ts-ignore
    setTheme(themeColor)
    setDarkMode(checked)
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='bg-white border-gray-50 shadow-sm border rounded-lg w-[500px] h-[450px] mx-auto mt-28 pt-4 relative'>
        <div className={window ? `absolute w-full h-full bg-white` : `hidden`}>
          <h1
            className='cursor-pointer absolute top-0 left-4 hover:bg-gray-100 hover:rounded-full px-1'
            onClick={() => setWindow('')}
          >
            <Back />
          </h1>
          <h1 className='text-center'>{window}</h1>
          <div className={window === 'Edit Account' ? `` : `hidden`}>
            <AccountEdit user={userData} />
          </div>
          <div className={window === 'Preferences' ? `` : `hidden`}>
            <div>
              <div
                className={`flex text-sm w-[240px] mt-12 mx-auto justify-evenly ${
                  darkMode
                    ? 'text-white bg-slate-500 hover:bg-slate-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                } h-[40px] rounded-lg  cursor-pointer`}
              >
                <h1
                  onClick={() => toggleDarkMode(!darkMode)}
                  className='my-auto'
                >
                  {darkMode ? 'Toggle Light mode' : 'Toggle Night mode'}
                </h1>
                <div className='my-auto'>{darkMode ? <Sun /> : <Moon />}</div>
              </div>
            </div>
          </div>
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
