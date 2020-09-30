import mongoose from 'mongoose'

const ColdCutsSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

export default mongoose.model('cold-cuts', ColdCutsSchema, 'cold-cuts')