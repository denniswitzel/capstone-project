import mongoose from 'mongoose'

const MincedSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: [String],
    image: String,
    rating: Array
})

export default mongoose.model('minced', MincedSchema, 'minced')