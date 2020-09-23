import mongoose from 'mongoose'

const NuggetsSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: [String],
    image: String,
    rating: Number,
    numberOfRatings: Number,
})

export default mongoose.model('nuggets', NuggetsSchema, 'nuggets')