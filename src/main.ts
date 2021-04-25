import "reflect-metadata"
import { env } from './config/env'
import { Connection } from './config/defaultConneciton'
import RestController from './controller/index'
import { createExpressServer } from 'routing-controllers';

Connection.MySqlConnect()

const app = createExpressServer({
  controllers: [RestController],
});

app.listen(env.PORT, () => {
  console.log(`Server on | PORT ${env.PORT}`)
})