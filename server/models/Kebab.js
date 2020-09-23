import mongoose from 'mongoose'

const KebabSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: [String],
    image: String,
    rating: Number,
    numberOfRatings: Number,
})

export default mongoose.model('kebab', KebabSchema, 'kebab')