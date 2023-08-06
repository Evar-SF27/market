import mongoose from 'mongoose'

const storeSchema = new mongoose.Schema({
    store_name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    subscribers: {
        type: Map,
        of: String
    },
    contact: {
        type: String
    },
    photo_url: {
        type: String
    }
})

var Store = mongoose.models.store || mongoose.model("store", storeSchema)
export default Store