import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import serverless from 'serverless-http'
import burgerRoute from './api/burger.js'
import coldCutsRoute from './api/coldCuts.js'
import kebabRoute from './api/kebab.js'
import mincedRoute from './api/minced.js'
import nuggetsRoute from './api/nuggets.js'
import sausagesRoute from './api/sausages.js'


dotenv.config()

const server = express();
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.use('/burger', burgerRoute)
server.use('/cold-cuts', coldCutsRoute)
server.use('/kebab', kebabRoute)
server.use('/minced', mincedRoute)
server.use('/nuggets', nuggetsRoute)
server.use('/sausages', sausagesRoute)


server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
  })

const uri = process.env.DB_CONNECTION
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri,
     {  useNewUrlParser: true, useCreateIndex: true }, 
     () => console.log('connected to DB'))

module.exports.handler = serverless(server);