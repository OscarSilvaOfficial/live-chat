import Fabric from './services/fabric.js'
import * as socket from "socket.io"

const f = new Fabric()

export const server = f.buildServer()

const io = new socket.Server(server, {
  cors: {
    origin: "*"
  }
})

io.on('connection', socket => {
  console.log(`Requisição do socket ${socket.id}`)

  socket.on('sendMessage', msg => {
    socket.broadcast.emit('receivedMessage', msg)
  })
})