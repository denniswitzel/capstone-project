import mongoose from 'mongoose'

const KebabSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

export default mongoose.model('kebab', KebabSchema, 'kebab')