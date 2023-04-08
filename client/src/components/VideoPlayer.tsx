import React, { useRef, useEffect } from 'react'

const VideoPlayer = ({ stream }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream
  }, [stream])

  return <video className='border-4 w-[450px]' ref={videoRef} autoPlay />
}

export default VideoPlayer
