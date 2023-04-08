import React, { useRef, useEffect, useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

const VideoPlayer = ({ stream }: any) => {

  const { micOn, setMicOn, videoOn, setVideoOn } = useContext(RoomContext)
 
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream
  }, [stream])

  return <video className='border border-black' ref={videoRef} muted={!micOn} hidden={!videoOn} autoPlay />
}

export default VideoPlayer
