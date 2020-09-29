import express from 'express'
import Sausages from '../models/Sausages.js'

const router = express.Router()

router.get('/', async (req, res)  => {
    await Sausages.find()
    .then(sausages => res.json(sausages))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', async (req, res) => {
    await Sausages.findById(req.params.id)
    .then(sausagesId => res.json(sausagesId))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req, res) => {
    await Sausages.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating, numberOfRatings: req.body.numberOfRatings}})
    .then(sausagesUpdate => res.json(sausagesUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})




export default router