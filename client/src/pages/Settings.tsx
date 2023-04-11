import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'

const Settings = () => {
  useEffect(() => {
    fetchUserData().then((res) => console.log(res))
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      Settings
    </div>
  )
}

export default Settings
