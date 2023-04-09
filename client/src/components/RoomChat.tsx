import React, { useState } from 'react'
import ChatBubble from './ChatBubble'

type Props = {
  isOpen: boolean
}

const RoomChat = ({ isOpen }: Props) => {
  const [chats, setChats] = useState<Array<Object>>([])
  const [message, setMessage] = useState('')

  const sendMessageHandler = () => {
    setMessage('')
    setChats((oldChats) => [message, ...oldChats])
    console.log(chats)
  }

  return (
    <>
      {isOpen ? (
        <div className='h-screen bg-white w-[250px] z-10'>
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
          <div className='flex'>
            <input
              placeholder='Type your message'
              type='text'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button type='button' onClick={sendMessageHandler}>
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
