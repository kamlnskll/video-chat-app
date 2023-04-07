import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RoomContext } from '../context/RoomContext'

const Room = () => {
  const { callId } = useParams()
  const { socket, me } = useContext(RoomContext)

  useEffect(() => {
    if (me) socket.emit('join-room', { roomId: callId, peerId: me._id })
    console.log('socket', socket)
    console.log('me', me)
  }, [])

  return <div>Room ID: {callId}</div>
}

export default Room
