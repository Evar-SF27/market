import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    category_slug: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        unique: true,
        required: true
    },
    photo_url: {
        type: String
    }
})

module.exports = mongoose.models.category || mongoose.model("category", categorySchema)