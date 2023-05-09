import React, { useRef, useEffect, useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import { userContext } from '../context/auth'

const VideoPlayer = ({ stream, userName }: any) => {
  const { micOn, setMicOn, videoOn, setVideoOn } = useContext(RoomContext)

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream
  }, [stream])

  return (
    <div className='relative'>
      <h1
        className={
          userName
            ? `absolute z-20 bg-black bg-opacity-75 text-white text-xs p-1 font-semibold bottom-0 w-full pl-2 rounded-l-md`
            : 'hidden'
        }
      >
        {userName}
      </h1>
      <video
        className='rounded-md min-w-[275px]'
        ref={videoRef}
        muted={!micOn}
        hidden={!videoOn}
        autoPlay
      />
    </div>
  )
}

export default VideoPlayer
