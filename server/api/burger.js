import express from 'express'
import Burger from '../models/Burger.js'

const router = express.Router()

router.get('/', async (req, res)  => {
    await Burger.find()
    .then(burger => res.json(burger))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', async (req, res) => {
    await Burger.findById(req.params.id)
    .then(burgerId => res.json(burgerId))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req, res) => {
    await Burger.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating }})
    .then(burgerUpdate => res.json(burgerUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})




export default router