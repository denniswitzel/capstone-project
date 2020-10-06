import express from 'express'
import Nuggets from '../models/Nuggets.js'

const router = express.Router()

router.get('/', async (req, res)  => {
    await Nuggets.find()
    .then(nuggets => res.json(nuggets))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', async (req, res) => {
    await Nuggets.findById(req.params.id)
    .then(nuggetsId => res.json(nuggetsId))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req, res) => {
    await Nuggets.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating, numberOfRatings: req.body.numberOfRatings}})
    .then(nuggetsUpdate => res.json(nuggetsUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})




export default router