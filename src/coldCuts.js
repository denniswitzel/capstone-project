const express = require('express')
const ColdCuts = require('./models/ColdCuts')

const router = express.Router()

router.get('/', async (req, res)  => {
    await ColdCuts.find()
    .then(coldCuts => res.json(coldCuts))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', async (req, res) => {
    await ColdCuts.findById(req.params.id)
    .then(coldCutsId => res.json(coldCutsId))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req, res) => {
    await ColdCuts.updateOne({_id: req.params.id}, { $set: { rating: req.body.rating }})
    .then(coldCutsUpdate => res.json(coldCutsUpdate))
    .catch(err => res.status(400).json('Error: ' + err))
})




module.exports = router