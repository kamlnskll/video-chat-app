import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'

const Contacts = () => {
  useEffect(() => {
    fetchUserData().then((res) => console.log(res))
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      Contacts
    </div>
  )
}

export default Contacts
