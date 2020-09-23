import mongoose from 'mongoose'

const SausagesSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: [String],
    image: String,
    rating: Number,
    numberOfRatings: Number,
})

export default mongoose.model('sausages', SausagesSchema, 'sausages')