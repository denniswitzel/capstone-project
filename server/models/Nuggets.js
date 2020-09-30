import mongoose from 'mongoose'

const NuggetsSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

export default mongoose.model('nuggets', NuggetsSchema, 'nuggets')