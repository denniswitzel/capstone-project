import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import burgerRoute from './routes/burger.js'
import coldCutsRoute from './routes/coldCuts.js'
import kebabRoute from './routes/kebab.js'
import mincedRoute from './routes/minced.js'
import nuggetsRoute from './routes/nuggets.js'
import sausagesRoute from './routes/sausages.js'


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

     