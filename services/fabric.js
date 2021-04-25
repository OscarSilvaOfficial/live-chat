import express from 'express'
import cors from 'cors'

class Fabric {

  constructor() {
    this.app = express()
  }

  buildServer() {

    return this.buildApp().listen(3000, () => {
      console.log("Run at port 3000")
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