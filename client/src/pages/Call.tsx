import React, { useEffect, useState, useRef } from 'react'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'
import Peer from 'peerjs'
import VideoContainer from '../components/VideoContainer'

const peer = new Peer()
const socket = io('http://localhost:8000')

const Call = () => {
  const { callId } = useParams()
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')
  const peerRef = useRef()
  const [stream, setStream] = useState()
  const [users, setUsers] = useState([])

// Generate PeerID for the user
useEffect(() => {
  const peer = new Peer()
  //@ts-ignore
  peerRef.current = peer
  peer.on('open', () => {
    console.log(`Peer ${peer.id}`)
  })
}, [])

  // This socket emits the event that we have joined the specific call with the specific callID (in this case it is hardcoded to 123 but will be dynamic)
  useEffect(() => {
    socket.emit('join_call', callId)
    
  // Create PeerJS connection with room
  socket.on('user_join', (userId) => {
    console.log(`User ${userId} has joined the room`)
    //@ts-ignore
    const conn = peerRef.current.connect(userId)
    conn.on('open', () => {
      console.log(`Connected to user ${userId}`)
      conn.on('data', (data: any) => {
        console.log(`Received data ${data}`)
      })

    const getUserMedia = navigator.mediaDevices.getUserMedia;
    getUserMedia({video: true, audio: true}).then((myStream: MediaStream) => {
      //@ts-ignore
      setStream(myStream)
      //@ts-ignore
      conn.send(peerRef.current.id)
      conn.on('stream', (remoteStream: MediaStream) => {
              //@ts-ignore
        setUsers((oldUsers) => [...oldUsers, {id: userId, stream: remoteStream}])
      })
    })
    .catch((error) => {
      console.log(error)
    })
    })
  })


  // Disconnect Peer connection when they leave room
  socket.on('leave_room', (userId) => {
    console.log(`User ${userId} has left the room`)
    //@ts-ignore
    const conn = peerRef.current.connect(userId)
    conn.close()
    setUsers((oldUsers) => oldUsers.filter((user: any) => user.id !== userId))
  })


  //On connect to the room, they accept the offer and setup RTCs
  //@ts-ignore
  peerRef.current.on('call', (call) => {
    console.log(`Received call from user ${call.peer}`)
    const getUserMedia = navigator.mediaDevices.getUserMedia
    getUserMedia({video: true, audio: true})
    .then((myStream) => {
      call.answer(myStream)
      call.on('stream', (remoteStream: any) => {
        //@ts-ignore
        setUsers((oldUsers) => [...oldUsers, {id: call.peer, stream: remoteStream}])
      })
    })
    .catch((error) => {
      console.log(error)
    })
    })  
  }, [])



  const sendMessage = () => {
    if (message) {
      socket.emit('send_message', {
        message: message,
        sender: socket.id,
        roomId: callId,
      })
      setMessage('')
    } else {
      console.log('Chat cannot be blank')
    }
  }

  // Duplication glitch occurs when putting setChat in the receive message useEffect

  useEffect(() => {
    socket.on('receive_message', (data: object) => {
      // @ts-ignore
      setChat((oldChat: Array<string>) => [...oldChat, data])
    })
  }, [socket])

  return (
    <div className='flex'>
      <div className='h-screen w-full bg-green-100'>
      <div>
        <>
        {users.map((user: any) => {
          <VideoContainer stream={stream}/>
        })
        
        }
        </>
        </div>
        <div className='bg-red-100'>
          <h1>Video Settings Bar</h1>
        </div>
      </div>
      <div className='w-1/3 h-screen bg-blue-50'>
        <div>
          <h1 className='text-lg font-bold'>Chat</h1>
        </div>
        <div>
          {chat.map((chatMsg: any, index: any) => (
            <div key={index}>
              <h1>{chatMsg?.message}</h1>
              <h1>Sent by: {chatMsg?.sender}</h1>
            </div>
          ))}
        </div>
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Chat here'
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          />
          <button type='button' className='bg-sky-200' onClick={sendMessage}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Call
