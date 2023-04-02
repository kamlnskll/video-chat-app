import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()
const httpServer = http.createServer(app)

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
  socket.on("join_call", (data) => {
    if(!socket.rooms.hasOwnProperty(data)){
      socket.join(data)
      console.log(`User with ID ${socket.id} has joined room: ${data}`)
    } else{
      console.log(`User with ID: ${socket.id} is already in the room ${data}`)
    }

  })

  socket.on("leave_call", (data) => {

  })

socket.on("send_message", (data) => {
  // Do stuff with data here if necessary
    socket.to(data.roomId).emit("receive_message", { message: data.message,
    sender: socket.id})
  })


  socket.on('disconnect', (socket) => {
    console.log(`${socket.id} disconnected`)
  })

})


httpServer.listen(PORT, (error) => {
  if (!error) {
    console.log('HTTP server listening on port ' + PORT)
  } else {
    console.log('Error: Express server could NOT start.')
  }
})
