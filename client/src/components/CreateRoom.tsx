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
      className='border-black border-4 bg-red-300 w-full h-2/3'
    >
      Start new meeting
    </button>
  )
}

export default CreateRoom
