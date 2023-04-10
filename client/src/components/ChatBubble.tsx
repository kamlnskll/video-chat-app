import React from 'react'

type ChatProps = {
  chat: Array<string> | any
  isMe: boolean
}

const ChatBubble = ({ chat, isMe }: ChatProps) => {
  return (
    <>
      {isMe ? (
        <div className='bg-blue-400 mt-4 mx-4 rounded-xl px-2 py-2 text-white'>
          <div className='flex'>
            <h1 className='text-xs font-semibold'>Michael Kaminski</h1>
            <h1 className='text-xs ml-12'>{chat.time}</h1>
          </div>
          <h1 className='text-sm pt-2'>{chat.message}</h1>
        </div>
      ) : (
        <div className='bg-slate-500 mt-4 mx-4 rounded-xl px-2 py-2 text-white'>
          <div className='flex'>
            <h1 className='text-xs font-semibold'>Other Person</h1>
            <h1 className='text-xs ml-12'>Timestamp</h1>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBubble
