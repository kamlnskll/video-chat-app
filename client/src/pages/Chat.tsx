import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'
import Chatroom from '../components/Chatroom'
import { getChats } from '../axios/chatRoutes'

const Chat = () => {
  const [chat, setChat] = useState([])
  const [chatId, setChatId] = useState('')

  useEffect(() => {
    getChats().then((res) => {
      setChat(res)
    })
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border bg-white w-[700px] h-[500px] mt-12 relative rounded-xl grid grid-cols-8 grid-rows-8'>
        <div className='col-span-2 row-span-8 border'>
          <h1
            className='text-center text-xs font-bold mt-4'
            //@ts-ignore
            onClick={() => console.log(chat)}
          >
            {`Current Chats (${chat?.length || 0})`}
          </h1>
          <div>
            {chat?.map((chatData: any) => {
              return (
                <div
                  className='border hover:bg-gray-100 mt-1 py-2'
                  onClick={() => setChatId(chatData._id)}
                >
                  <h1>{chatData.members[0].firstName}</h1>
                </div>
              )
            })}
          </div>
        </div>
        <div className='border col-span-6 row-span-8'>
          <Chatroom chatId={chatId} />
        </div>
      </div>
    </div>
  )
}

export default Chat
