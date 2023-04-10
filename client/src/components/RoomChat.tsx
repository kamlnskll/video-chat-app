import React, { useState, useContext, useEffect } from 'react'
import ChatBubble from './ChatBubble'
import { RoomContext } from '../context/RoomContext'

type Props = {
  isOpen: boolean
}

const RoomChat = ({ isOpen }: Props) => {
  const [chats, setChats] = useState<Array<Object>>([])
  const [message, setMessage] = useState('')
  const { socket } = useContext(RoomContext)

  const sendMessageHandler = () => {
    setMessage('')
    setChats((oldChats) => [message, ...oldChats])
    console.log(chats)
  }

  useEffect(() => {
    socket.on('')
  })

  return (
    <>
      {isOpen ? (
        <div className='h-screen bg-white w-[250px] z-10 relative overflow-y-none'>
          <div>
            <h1 className='pt-12 pl-4 text-xl font-bold text-black z-40'>
              Chat
            </h1>
          </div>
          <div>
            {chats.map((chat) => (
              <ChatBubble chat={chat} isMe={true} />
            ))}
          </div>
          <div className='flex gap-2 mt-24 absolute bottom-24'>
            <input
              placeholder='Type your message'
              type='text'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className='rounded-md pl-2 h-[34px] bg-gray-100 text-xs ml-4 outline-none'
            />
            <button
              type='button'
              className='text-xs border px-1 ml-2 rounded-md hover:text-white hover:bg-blue-600 hover:border-none'
              onClick={sendMessageHandler}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default RoomChat
