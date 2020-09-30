import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Burger from './models/Burger.js'
import ColdCuts from './models/ColdCuts.js'
import Kebab from './models/Kebab.js'
import Minced from './models/Minced.js'
import Nuggets from './models/Nuggets.js'
import Sausages from './models/Sausages.js'

dotenv.config()

const server = express();
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.get('/burger', async (req, res)  => {
    await Burger.find()
    .then(burger => res.json(burger))
    .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/burger/:id', async (req, res) => {
    await Burger.findById(req.params.id)
    .then(burgerId => res.json(burgerId))
    .catch(err => res.status(400).json('Error: ' + err))
})

server.patch('/burger/:id', async (req, res) => {
    await Burger.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating }})
    .then(burgerUpdate => res.json(burgerUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/cold-cuts', async (req, res)  => {
  await ColdCuts.find()
  .then(coldCuts => res.json(coldCuts))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/cold-cuts/:id', async (req, res) => {
  await ColdCuts.findById(req.params.id)
  .then(coldCutsId => res.json(coldCutsId))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.patch('/cold-cuts/:id', async (req, res) => {
  await ColdCuts.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating }})
  .then(coldCutsUpdate => res.json(coldCutsUpdate))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/kebab', async (req, res)  => {
  await Kebab.find()
  .then(kebab => res.json(kebab))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/kebab/:id', async (req, res) => {
  await Kebab.findById(req.params.id)
  .then(kebabId => res.json(kebabId))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.patch('/kebab/:id', async (req, res) => {
  await Kebab.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating, numberOfRatings: req.body.numberOfRatings}})
  .then(kebabUpdate => res.json(kebabUpdate))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/minced', async (req, res)  => {
  await Minced.find()
  .then(minced => res.json(minced))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/minced/:id', async (req, res) => {
  await Minced.findById(req.params.id)
  .then(mincedId => res.json(mincedId))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.patch('/minced/:id', async (req, res) => {
  await Minced.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating}})
  .then(mincedUpdate => res.json(mincedUpdate))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/nuggets', async (req, res)  => {
  await Nuggets.find()
  .then(nuggets => res.json(nuggets))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/nuggets/:id', async (req, res) => {
  await Nuggets.findById(req.params.id)
  .then(nuggetsId => res.json(nuggetsId))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.patch('/nuggets/:id', async (req, res) => {
  await Nuggets.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating, numberOfRatings: req.body.numberOfRatings}})
  .then(nuggetsUpdate => res.json(nuggetsUpdate))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/sausages', async (req, res)  => {
  await Sausages.find()
  .then(sausages => res.json(sausages))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.get('/sausages/:id', async (req, res) => {
  await Sausages.findById(req.params.id)
  .then(sausagesId => res.json(sausagesId))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.patch('/sausages/:id', async (req, res) => {
  await Sausages.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating, numberOfRatings: req.body.numberOfRatings}})
  .then(sausagesUpdate => res.json(sausagesUpdate))
  .catch(err => res.status(400).json('Error: ' + err))
})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
  })

const uri = process.env.DB_CONNECTION
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri,
     {  useNewUrlParser: true, useCreateIndex: true }, 
     () => console.log('connected to DB'))

     