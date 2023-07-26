import mongoose from 'mongoose'

const storeSchema = new mongoose.Schema({
    store_name: {
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
        unique: true,
        required: true
    },
    rating: {
        type: Float32Array,
        required: true
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

module.exports = mongoose.models.store || mongoose.model("store", storeSchema)