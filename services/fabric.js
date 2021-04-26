import express from 'express'
import cors from 'cors'
import env from '../config/env.js'

class Fabric {

  constructor() {
    this.app = express()
  }

  buildServer() {

    return this.buildApp().listen(env.PORT, () => {
      console.log(`Run at port ${env.PORT}`)
    })    

  }

  buildApp() {

    this.app.use(
      cors({origin: '*' }), 
      express.json() 
    )
    
    return this.app
  }

}

export default Fabric