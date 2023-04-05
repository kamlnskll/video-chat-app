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
    }
}, [stream])

  return (
    <div className=''>
        <video 
        ref={videoRef}
        autoPlay
        playsInline
        className=''
        />
    </div>
  )
}

export default VideoContainer
