import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'

const Chat = () => {
  useEffect(() => {
    fetchUserData().then((res) => console.log(res))
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      Chat
    </div>
  )
}

export default Chat
