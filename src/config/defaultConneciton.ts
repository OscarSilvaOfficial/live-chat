import { createConnection } from "typeorm";
import { env, PATH } from './env'

export class Connection {

  static MySqlConnect(): void {
    createConnection({
      type: "mysql",
      host: env.HOST,
      port: env.DB_PORT,
      username: env.USERNAME,
      password: env.PASSWD,
      database: env.DB,
      entities: [
        PATH + "/models/*.ts"
      ],
      synchronize: true,
      logging: false
    })
    .then(connection => { 
      console.log(`DB Is connect: ${connection.isConnected}`)
      console.log(`Entities dirs: ${PATH + "/models/*.ts"}`)
    })
    .catch(error => console.log(error));
  }

}