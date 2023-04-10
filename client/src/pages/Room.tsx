import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RoomContext } from '../context/RoomContext'
import VideoPlayer from '../components/VideoPlayer'
import { PeerState } from '../context/peerReducer'
import CallMenu from '../components/CallMenu'
import InviteModal from '../components/InviteModal'
import RoomChat from '../components/RoomChat'

const Room = () => {
  const { callId } = useParams()
  const { socket, me, stream, peers, openChatToggle } = useContext(RoomContext)
  const [openInviteModal, setOpenInviteModal] = useState(false)

  const inviteModalHandler = (boolean: boolean) => {
    setOpenInviteModal(boolean)
  }

  useEffect(() => {
    if (me) socket.emit('join-room', { roomId: callId, peerId: me._id })
    console.log('socket', socket)
    console.log('me', me)
  }, [])

  return (
    <div className='relative overflow-y-none'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <InviteModal
          inviteModalHandler={inviteModalHandler}
          isOpen={openInviteModal}
          callId={callId}
        />
      </div>
      <div className='absolute right-0'>
        <RoomChat isOpen={openChatToggle} />
      </div>
      <div className='bg-neutral-800 text-center text-white h-[30px] sticky z-50'>
        <h1>Room ID: {callId}</h1>
      </div>
      <div
        className='bg-black h-screen grid grid-cols-3 p-4'
        id='video-container'
      >
        <div className='col-span-1 row-span-1 relative'>
          <VideoPlayer stream={stream} />
        </div>
        {Object.values(peers as PeerState).map((peer) => (
          <VideoPlayer stream={peer.stream} />
        ))}
      </div>
      <div className='bg-neutral-800 bottom-0 sticky absolute w-full z-50'>
        <CallMenu
          inviteModal={openInviteModal}
          openInviteModal={inviteModalHandler}
          myId={me}
          callId={callId}
          participants={peers}
        />
      </div>
    </div>
  )
}

export default Room
