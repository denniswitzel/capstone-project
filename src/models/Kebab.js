const mongoose = require('mongoose')

const KebabSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

module.exports = mongoose.model('kebab', KebabSchema, 'kebab')