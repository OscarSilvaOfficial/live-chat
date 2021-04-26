import env from 'dotenv'

env.config()

const variables = {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO_DB
} 

export default variables