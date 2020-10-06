const mongoose = require('mongoose')

const BurgerSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

module.exports = mongoose.model('burger', BurgerSchema, 'burger')