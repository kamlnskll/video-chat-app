import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

const CreateRoom = () => {
  const { socket } = useContext(RoomContext)

  const createRoom = () => {
    socket.emit('create-room')
  }

  return (
    <button
      type='button'
      onClick={createRoom}
      className='text-white font-bold text-xl'
    >
      Start new meeting
    </button>
  )
}

export default CreateRoom
