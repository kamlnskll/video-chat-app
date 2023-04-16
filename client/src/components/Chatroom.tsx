import React, { useEffect, useState } from 'react'

type ChatProps = {
  chatId: any
}

const Chatroom = ({ chatId }: ChatProps) => {
  return (
    <div>
      <h1 className='text-center mt-4 font-semibold text-sm'>
        Name of person you are chatting with
      </h1>
      <h1>{chatId}</h1>
      <div>{}</div>
    </div>
  )
}

export default Chatroom
