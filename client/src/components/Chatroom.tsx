import React, { useEffect, useState, useContext } from 'react'
import dayjs from 'dayjs'
import { findMessagesInChat, sendMessage } from '../axios/chatRoutes'
import { userContext } from '../context/auth'

type ChatProps = {
  chatId: any
  chatUsername: string | undefined
}

const Chatroom = ({ chatId, chatUsername }: ChatProps) => {
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
  }, [chatId, userData])

  return (
    <div className='relative h-full'>
      <h1 className='text-center mt-2 font-semibold'>{chatUsername}</h1>
      <div className='mt-6'>
        {messages?.map((message: any) => (
          <div
            className={
              userData._id === message.sender._id
                ? `bg-indigo-500 ml-auto rounded-xl text-white mx-6 my-1 w-[200px] relative`
                : `bg-slate-500 mr-auto rounded-xl text-white mx-6 my-1 w-[200px] relative`
            }
          >
            <div className='flex'>
              <img
                src={message.sender.profilePic}
                className='w-[20px] h-[20px] m-2'
                alt='profile pic of message sender'
              />
              <h1 className='my-2 font-semibold text-sm'>
                {message.sender.userName}
              </h1>
            </div>
            <div className='absolute top-2 right-3 opacity-70 font-semibold text-[10px]'>
              <h1>{dayjs(message.createdAt).format(`MMMM D`)}</h1>
            </div>
            <p className='mx-2 pb-1 text-sm'>{message?.message}</p>
          </div>
        ))}
      </div>
      <div className=''>
        <input
          className='border absolute py-2 rounded-md text-xs pl-2 outline-none bottom-10 left-[55px] w-[400px] dark:bg-slate-600 dark:border-slate-500'
          placeholder='Type message'
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  )
}

export default Chatroom
