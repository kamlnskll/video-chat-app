import { Socket } from 'socket.io'
import { v4 as uuidV4 } from 'uuid'

const rooms = {}

export const roomHandler = (socket) => {
  const createRoom = () => {
    const roomId = uuidV4()
    rooms[roomId] = []
    socket.emit('room-created', { roomId })
    console.log('User has created the room')
  }

  const joinRoom = ({ roomId, peerId }) => {
    if (rooms[roomId]) {
      console.log('User has joined the room', roomId, peerId)
      rooms[roomId].push(peerId)
      socket.join(roomId)
      socket.emit('get-users', {
        roomId,
        participants: rooms[roomId],
      })
    }
  }

  socket.on('create-room', createRoom)
  socket.on('join-room', joinRoom)
}
