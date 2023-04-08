import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RoomContext } from '../context/RoomContext'
import VideoPlayer from '../components/VideoPlayer'
import { PeerState } from '../context/peerReducer'

const Room = () => {
  const { callId } = useParams()
  const { socket, me, stream, peers } = useContext(RoomContext)

  useEffect(() => {
    if (me) socket.emit('join-room', { roomId: callId, peerId: me._id })
    console.log('socket', socket)
    console.log('me', me)
  }, [])

  return (
    <div>
      <div>Room ID: {callId}</div>
      <VideoPlayer stream={stream} />
      {Object.values(peers as PeerState).map((peer) => (
        <VideoPlayer stream={peer.stream} />
      ))}
    </div>
  )
}

export default Room
