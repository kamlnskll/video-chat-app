import React, { useEffect } from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import { VideoOn, VideoOff } from '../icons/Video'
import { MicOn, MicOff } from '../icons/Mic'
import { Invite } from '../icons/Invite'
import { Chat } from '../icons/Chat'
import { useNavigate } from 'react-router-dom'

type Props = {
  callId: string | undefined
  participants: string
  myId: string
  openInviteModal: any
  inviteModal: any
}

const CallMenu = ({
  callId,
  participants,
  myId,
  openInviteModal,
  inviteModal,
}: Props) => {
  const {
    micOn,
    setMicOn,
    videoOn,
    setVideoOn,
    socket,
    openChatToggle,
    setOpenChatToggle,
  } = useContext(RoomContext)
  const navigate = useNavigate()

  const leaveCall = () => {
    socket.emit('user-disconnected', myId)
    navigate('/')
  }

  return (
    <div className='flex h-[85px] text-white justify-between mx-8 pt-6 text-center'>
      <div className='flex gap-8'>
        <div onClick={() => setMicOn(!micOn)} className='cursor-pointer'>
          {micOn ? <MicOn /> : <MicOff />}
          <h1>Mute</h1>
        </div>
        <div
          onClick={() => {
            setVideoOn(!videoOn)
            console.log(videoOn)
          }}
        >
          {videoOn ? <VideoOn /> : <VideoOff />}
          <h1>Stop Video</h1>
        </div>
      </div>
      <div className='flex gap-8'>
        <div onClick={() => openInviteModal(!inviteModal)}>
          <Invite />
          <h1>Invite</h1>
        </div>
        <div className='' onClick={() => setOpenChatToggle(!openChatToggle)}>
          <Chat />
          <h1>Chat</h1>
        </div>
      </div>
      <div className=''>
        <button
          type='button'
          className='text-red-600 hover:border-2 hover:bg-red-600 hover:text-white hover:border-black px-2 py-1 rounded-xl'
          onClick={() => leaveCall()}
        >
          Disconnect
        </button>
      </div>
    </div>
  )
}

export default CallMenu
