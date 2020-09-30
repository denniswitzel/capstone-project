import mongoose from 'mongoose'

const BurgerSchema = mongoose.Schema({
    category: String,
    title: String,
    ingredients: String,
    allergies: Array,
    image: String,
    rating: Array
})

export default mongoose.model('burger', BurgerSchema, 'burger')