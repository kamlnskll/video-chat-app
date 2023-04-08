import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RoomContext } from '../context/RoomContext'
import VideoPlayer from '../components/VideoPlayer'
import { PeerState } from '../context/peerReducer'
import CallMenu from '../components/CallMenu'

const Room = () => {
  const { callId } = useParams()
  const { socket, me, stream, peers } = useContext(RoomContext)

  useEffect(() => {
    if (me) socket.emit('join-room', { roomId: callId, peerId: me._id })
    console.log('socket', socket)
    console.log('me', me)
  }, [])

  return (
    <div className=''>
      <div className='bg-neutral-800 text-center text-white h-[30px]'>
        <h1>Room ID: {callId}</h1>
        </div>
      <div className='bg-black h-screen grid grid-cols-3 p-4' id='video-container'>
        <div className='col-span-1 row-span-1 relative'>
      <VideoPlayer stream={stream} />
      </div>
      {Object.values(peers as PeerState).map((peer) => (
        <VideoPlayer stream={peer.stream} />
      ))}
      </div>
      <div className='bg-neutral-800 bottom-0 sticky absolute w-full'><CallMenu myId={me} callId={callId} participants={peers}/></div>
    </div>
  )
}

export default Room
