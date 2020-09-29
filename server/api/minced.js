import express from 'express'
import Minced from '../models/Minced.js'

const router = express.Router()

router.get('/', async (req, res)  => {
    await Minced.find()
    .then(minced => res.json(minced))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', async (req, res) => {
    await Minced.findById(req.params.id)
    .then(mincedId => res.json(mincedId))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req, res) => {
    await Minced.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating}})
    .then(mincedUpdate => res.json(mincedUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})




export default router