import mongoose from 'mongoose'

const SausagesSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

export default mongoose.model('sausages', SausagesSchema, 'sausages')