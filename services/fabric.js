import express from 'express'
import cors from 'cors'

class Fabric {

  constructor() {
    this.app = express()
  }

  buildServer() {

    return this.buildApp().listen(5000, () => {
      console.log("Run at port 5000")
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