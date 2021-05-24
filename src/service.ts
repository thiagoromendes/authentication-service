import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes'
import appConfig from './config/app'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const port = appConfig.app.port

app.listen(port, () => console.log('Service Authentication Started'))