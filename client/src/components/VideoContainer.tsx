import React, {useEffect, useRef} from 'react'

type Props = {
    stream: any
}

const VideoContainer = ({stream}: Props) => {

const videoRef = useRef(null)

useEffect(() => {
    if (stream){
        //@ts-ignore
        videoRef.current.srcObject = stream
        console.log('There is a stream')
    }
}, [stream])

  return (
    <div className='w-full h-screen'>
        <video 
        ref={videoRef}
        autoPlay
        playsInline
        className='w-[128px] h-[128px]'
        />
    </div>
  )
}

export default VideoContainer
