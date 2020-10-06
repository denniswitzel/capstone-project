const mongoose = require('mongoose')

const SausagesSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

module.exports = mongoose.model('sausages', SausagesSchema, 'sausages')