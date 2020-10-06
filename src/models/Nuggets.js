const mongoose = require('mongoose')

const NuggetsSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

module.exports = mongoose.model('nuggets', NuggetsSchema, 'nuggets')