const express = require('express')
const Kebab = require('./models/Kebab')

const router = express.Router()

router.get('/', async (req, res)  => {
    await Kebab.find()
    .then(kebab => res.json(kebab))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', async (req, res) => {
    await Kebab.findById(req.params.id)
    .then(kebabId => res.json(kebabId))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req, res) => {
    await Kebab.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating, numberOfRatings: req.body.numberOfRatings}})
    .then(kebabUpdate => res.json(kebabUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})




module.exports = router