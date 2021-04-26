import Fabric from './services/fabric.js'
import Message from './models/Message.js'
import * as socket from "socket.io"


const f = new Fabric()

export const server = f.buildServer()

const io = new socket.Server(server, {
  cors: {
    origin: "*"
  }
})

io.on('connection', async (socket) => {
  console.log(`Requisição do socket ${socket.id}`)

  socket.emit('previousMessages', await Message.find({}))

  socket.on('sendMessage', msg => {

    const message = new Message({
      name: msg.name,
      message: msg.message
    })

    message
      .save()
      .then(() => console.log('Mensagem armazenada'))
      .catch((e) => console.log(e))

    socket.broadcast.emit('receivedMessage', msg)
  })
})