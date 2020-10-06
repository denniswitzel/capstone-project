const mongoose = require('mongoose')

const MincedSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

module.exports = mongoose.model('minced', MincedSchema, 'minced')