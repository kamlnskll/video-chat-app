import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'
import Chatroom from '../components/Chatroom'

const Chat = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border bg-white w-[700px] h-[500px] mt-12 relative rounded-xl grid grid-cols-8 grid-rows-8'>
        <div className='col-span-2 row-span-8 border'>
          <h1 className='text-center text-xs font-bold mt-4'>
            Current Chats (0)
          </h1>
        </div>
        <div className='border col-span-6 row-span-8'>
          <Chatroom />
        </div>
      </div>
    </div>
  )
}

export default Chat
