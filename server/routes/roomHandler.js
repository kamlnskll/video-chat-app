import { Socket } from 'socket.io'
import { v4 as uuidV4 } from 'uuid'

const rooms = {}

export const roomHandler = (socket) => {
  const createRoom = () => {
    const roomId = uuidV4()
    rooms[roomId] = {}
    socket.emit('room-created', { roomId })
    console.log('User has created the room')
  }

  const joinRoom = ({ roomId, peerId }) => {
    if (rooms[roomId]) {
      console.log('User has joined the room', roomId, peerId)
      rooms[roomId] = {}
      socket.join(roomId)
      socket.to(roomId).emit('user-joined', { peerId })
      socket.emit('get-users', {
        roomId,
        participants: rooms[roomId],
      })
    }

    const leaveRoom = ({ peerId, roomId }) => {
      // rooms[roomId] = rooms[roomId].filter((id) => id !== peerId)
      socket.to(roomId).emit('user-disconnected', peerId)
    }

    socket.on('disconnect', () => {
      console.log('User has left the room', peerId)
      leaveRoom({ roomId, peerId })
    })
  }

  socket.on('create-room', createRoom)
  socket.on('join-room', joinRoom)
}
