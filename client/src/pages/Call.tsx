import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'

const socket = io('http://localhost:8000')



const Call = () => {


  const { callId } = useParams()
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')
  

  // This socket emits the event that we have joined the specific call with the specific callID (in this case it is hardcoded to 123 but will be dynamic)
  useEffect(() => {
    socket.emit("join_call", callId)
  }, [])


const sendMessage = () => {
  if(message){
    socket.emit("send_message", { message: message, sender: socket.id, roomId: callId})
    setMessage('')
  } else{
    console.log("Chat cannot be blank")
  }
  
}

// Duplication glitch occurs when putting setChat in the receive message useEffect

useEffect(() => {

  socket.on("receive_message", (data: object) => {
    // @ts-ignore 
    setChat((oldChat: Array<string>) => [...oldChat, data])
    })

}, [socket])




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
        <div>
          {chat.map((chatMsg: any, index: any) => 
            <div key={index}>
              <h1>{chatMsg?.message}</h1>
              <h1>Sent by: {chatMsg?.sender}</h1>
            </div>
        )}
        </div>
        <div className='flex gap-2'>
          <input type="text" placeholder="Chat here" value={message} onChange={(e: any) => setMessage(e.target.value)}/>
          <button type='button' className='bg-sky-200' onClick={sendMessage}>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Call
