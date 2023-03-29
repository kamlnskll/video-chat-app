import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const Call = () => {

  const socket = io('http://localhost:8000')
  const [callMessages, setCallMessages] = useState([])

  // This socket emits the event that we have joined the specific call with the specific callID (in this case it is hardcoded to 123 but will be dynamic)
  useEffect(() => {
    socket.emit("join_call", '123')
  }, [])


const sendMessage = () => {
  socket.emit("send_message", callMessages)
}


  return (
    <div className='flex'>
      <div className='h-screen w-full bg-green-100'>
      <div>
        <h1>Actual Video Chat Section Here</h1>
      </div>
      <div className='bg-red-100'>
        <h1>Video Settings Bar</h1>
      </div>
      </div>
      <div className='w-1/3 h-screen bg-blue-50'>
        <div><h1 className='text-lg font-bold'>Chat</h1></div>
        <div>Chat messages go here</div>
        <div className='flex gap-2'>
          <input type="text" placeholder="Chat here" onChange={(e: any) => setCallMessages(e.target.value)}/>
          <button type='button' className='bg-sky-200' onClick={sendMessage}>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Call
