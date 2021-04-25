import express from 'express'
import Routes from '../routes/urls.js'
import path from 'path'
import ejs from 'ejs'
import * as socket from "socket.io"
import cors from 'cors'

class Fabric {

  constructor() {
    this.app = express()
  }

  buildServer() {

    const server = this.buildApp().listen(3000, () => {
      console.log("Run at port 3000")
    })    

    const io = new socket.Server(server)

    io.on('connection', socket => {
      console.log(`Requisição do socket ${socket.id}`)

      socket.on('sendMessage', msg => {
        console.log(msg)
      })
    })
  }

  buildApp() {

    this.app.use(
      express.static(path.join('/home/oscar/Git/live-chat/public')),
      cors({origin: '*' }), express.json(), Routes, 
    )

    this.app.set('views', path.join('/home/oscar/Git/live-chat/public'))
    this.app.engine("html", ejs.renderFile)
    this.app.set('view engine', 'html')
    
    return this.app
  }

}

export default Fabric