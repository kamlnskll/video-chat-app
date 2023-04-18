import React, { useEffect, useState, useContext } from 'react'
import { findMessagesInChat, sendMessage } from '../axios/chatRoutes'
import { userContext } from '../context/auth'

type ChatProps = {
  chatId: any
}

const Chatroom = ({ chatId }: ChatProps) => {
  const { userData } = useContext(userContext)
  const [messages, setMessages] = useState<Array<Object>>([])
  const [message, setMessage] = useState<string>('')

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      // 👇 Get input value
      // console.log('chatId', chatId)
      // console.log('user data', userData._id)
      sendMessageHandler()
      // console.log('messages', message)
    }
  }

  const sendMessageHandler = async () => {
    await sendMessage(message, chatId).then((res) => {
      console.log(res)
    })
    setMessage('')
  }

  useEffect(() => {
    findMessagesInChat(chatId).then((res) => {
      setMessages(res)
    })
    console.log(userData)
  }, [chatId, userData])

  return (
    <div className='relative h-full'>
      <h1 className='text-center mt-4 font-semibold text-sm'>
        Name of person you are chatting with
      </h1>
      <h1>{chatId}</h1>
      <div>
        {messages?.map((message: any) => (
          <div>
            <h1 className=''>{message?.message}</h1>
            <h1 className=''>{}</h1>
          </div>
        ))}
      </div>
      <div className=''>
        <input
          className='border absolute py-1 rounded-md text-sm pl-2 outline-none bottom-10 left-[55px] w-[400px]'
          placeholder='Type message'
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessageHandler}>Submit</button>
      </div>
    </div>
  )
}

export default Chatroom
