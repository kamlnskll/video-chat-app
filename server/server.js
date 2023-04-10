import express from 'express'
import * as dotenv from 'dotenv'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import userRoutes from './routes/user.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { roomHandler } from './routes/roomHandler.js'

const app = express()
const httpServer = http.createServer(app)
dotenv.config()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

app.use(cors())

const PORT = 8000

app.get('/', (req, res) => {
  res.send(console.log('Hello world!!'))
})

io.on('connection', (socket) => {
  console.log(socket.id + ' connected')
  roomHandler(socket)

  socket.on('join-room', (data) => {
    console.log(data.roomId)
    if (!socket.rooms.hasOwnProperty(data.peerId)) {
      socket.join(data.roomId)
      console.log(`User with ID ${socket.id} has joined room: ${data.roomId}`)
    } else {
      console.log(
        `User with ID: ${socket.id} is already in the room ${data.roomId}`
      )
    }
  })

  socket.on('receive_message', (data) => {
    console.log('received message from emitter', { data })
    console.log(data.sender)
    console.log(data.message)
  })

  socket.on('disconnect', (socket) => {
    console.log(`${socket.id} disconnected`)
  })

  socket.on('leave_call', (data) => {})

  socket.on('send_message', (data) => {
    console.log('sent message')
    io.in(data.roomId).emit('receive_message', {
      message: data.message,
      sender: data.peerId,
    })
  })
})

// API Routes

app.use('/api/user', userRoutes)

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION)
    console.log('Successfully connected to MongoDB cluster')
  } catch (error) {
    throw error
  }
}

httpServer.listen(PORT, (error) => {
  if (!error) {
    console.log('HTTP server listening on port ' + PORT)
    connectToMongoDB()
  } else {
    console.log('Error: Express server could NOT start.')
  }
})
