const mongoose = require('mongoose')

const ColdCutsSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

module.exports = mongoose.model('cold-cuts', ColdCutsSchema, 'cold-cuts')