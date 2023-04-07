import { io } from 'socket.io-client'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Peer from 'peerjs'
import { v4 as uuidV4 } from 'uuid'

const socket = io('http://localhost:8000')
export const RoomContext = createContext<null | any>(null)

type Props = {
  children: any
}

export const RoomProvider = ({ children }: Props) => {
  const navigate = useNavigate()
  const [me, setMe] = useState<Peer>()
  const [stream, setStream] = useState<MediaStream>()
  const enterRoom = ({ roomId }: { roomId: 'string' }) => {
    console.log({ roomId })
    navigate(`/call/${roomId}`)
  }

  const getUsers = ({ participants }: { participants: string[] }) => {
    console.log({ participants })
  }

  useEffect(() => {
    const myId = uuidV4()
    const peer = new Peer(myId)
    setMe(peer)

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream)
        })
    } catch (err) {
      console.error(err)
    }

    socket.on('room-created', enterRoom)
    socket.on('get-users', getUsers)
  }, [])

  return (
    <RoomContext.Provider value={{ socket, me, stream }}>
      {children}
    </RoomContext.Provider>
  )
}
