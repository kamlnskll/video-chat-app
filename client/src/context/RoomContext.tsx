import { io } from 'socket.io-client'
import { createContext, useEffect, useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Peer from 'peerjs'
import { v4 as uuidV4 } from 'uuid'
import { peerReducer } from './peerReducer'
import { addPeerAction, removePeerAction } from './peerActions'

const socket = io('http://localhost:8000')
export const RoomContext = createContext<null | any>(null)

type Props = {
  children: any
}

export const RoomProvider = ({ children }: Props) => {
  const navigate = useNavigate()
  const [me, setMe] = useState<Peer>()
  const [stream, setStream] = useState<MediaStream>()
  const [peers, dispatch] = useReducer(peerReducer, {})
  const [micOn, setMicOn] = useState<boolean>(true)
  const [videoOn, setVideoOn] = useState<boolean>(true)
  const [openChatToggle, setOpenChatToggle] = useState<boolean>(false)

  const toggleCam = (roomId: any) => {
    const tracks = stream?.getVideoTracks()
    //@ts-ignore
    const myId = me?._id
    console.log(stream)
    console.log(tracks)

    if (tracks) {
      tracks.forEach((track) => {
        track.enabled = !track.enabled
      })

      socket.emit('toggle-camera', !tracks[0].enabled, roomId, myId)
    }
  }

  const enterRoom = ({ roomId }: { roomId: 'string' }) => {
    console.log({ roomId })
    navigate(`/call/${roomId}`)
  }

  const getUsers = ({ participants }: { participants: string[] }) => {
    console.log({ participants })
  }

  const removePeer = (peerId: string) => {
    dispatch(removePeerAction(peerId))
  }

  useEffect(() => {
    const myId = uuidV4()
    const peer = new Peer(myId)
    setMe(peer)

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          setStream(stream)
        })
    } catch (err) {
      console.error(err)
    }

    socket.on('toggle-camera', (data) => {
      // For some reason there is a glitch where the toggle camera only for people who join after you.
      // Must be fixed but overall it toggles for people

      const targetPeerId = data.targetId
      console.log(targetPeerId)
      const peerStreams = peers[targetPeerId]
      const peerStreamObj = peerStreams.stream?.getVideoTracks()
    })

    socket.on('room-created', enterRoom)
    socket.on('get-users', getUsers)
    socket.on('user-disconnected', removePeer)
  }, [])

  useEffect(() => {
    if (!me) return
    if (!stream) return

    socket.on('user-joined', ({ peerId }) => {
      const call = me.call(peerId, stream)
      call.on('stream', (peerStream) => {
        dispatch(addPeerAction(peerId, peerStream))
      })
    })
    me.on('call', (call) => {
      call.answer(stream)
      call.on('stream', (peerStream) => {
        dispatch(addPeerAction(call.peer, peerStream))
      })
    })
  }, [stream, me])

  return (
    <RoomContext.Provider
      value={{
        socket,
        me,
        stream,
        peers,
        micOn,
        setMicOn,
        videoOn,
        setVideoOn,
        setOpenChatToggle,
        openChatToggle,
        toggleCam,
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}
