import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'

const Profile = () => {
  useEffect(() => {
    fetchUserData().then((res) => console.log(res))
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      Profile
    </div>
  )
}

export default Profile
