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

var Category = mongoose.models.category || mongoose.model("Category", categorySchema)
export default Category