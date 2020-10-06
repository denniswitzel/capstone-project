const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const serverless = require('serverless-http')
const burgerRoute = require('./burger')
const coldCutsRoute = require('./coldCuts')
const kebabRoute = require('./kebab')
const mincedRoute = require('./minced')
const nuggetsRoute = require('./nuggets')
const sausagesRoute = require('./sausages')

const server = express({ path: '../.env' });
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.use('/.netlify/functions/server/burger', burgerRoute)
server.use('/.netlify/functions/server/cold-cuts', coldCutsRoute)
server.use('/.netlify/functions/server/kebab', kebabRoute)
server.use('/.netlify/functions/server/minced', mincedRoute)
server.use('/.netlify/functions/server/nuggets', nuggetsRoute)
server.use('/.netlify/functions/server/sausages', sausagesRoute)


server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
  })

const uri = process.env.DB_CONNECTION
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://Dennis:kmDLRbvjoeYJa4@planternate.3n5fn.mongodb.net/planternate?retryWrites=true&w=majority',
     {  useNewUrlParser: true, useCreateIndex: true }, 
     () => console.log('connected to DB'))

module.exports.handler = serverless(server);