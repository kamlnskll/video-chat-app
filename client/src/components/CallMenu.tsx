import React, { useEffect } from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

type Props = {

callId: string | undefined
participants: string,
myId: string,

}

const CallMenu = ({callId, participants, myId}: Props) => {

const { micOn, setMicOn, videoOn, setVideoOn } = useContext(RoomContext)


const leaveCall = () => {



}



  return (
  
  <div className='flex h-[85px] text-white justify-between mx-8 pt-6'>
<div className='flex gap-8'>
<div onClick={() => setMicOn(!micOn)}>Mute</div>
<div onClick={() => {
  setVideoOn(!videoOn)
  console.log(videoOn)}
  }>Stop Video</div>
</div>
<div className='flex gap-8'>
<div>Invite</div>
<div>Chat</div>
</div>
<div>
  <button className='text-red-600' onClick={() => {}}>Disconnect</button>
  </div>
  </div>
  )
}

export default CallMenu
