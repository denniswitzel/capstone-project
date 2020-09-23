import mongoose from 'mongoose'

const BurgerSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: [String],
    image: String,
    rating: Number,
    numberOfRatings: Number,
})

export default mongoose.model('burger', BurgerSchema, 'burger')