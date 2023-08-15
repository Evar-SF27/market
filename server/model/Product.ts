import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    product_slug: {
        type: String,
        required: true
    },
    product_category: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        unique: true,
        required: true
    },
    product_image: {
        type: Map,
        of: String
    },
    price: {
        type: Float64Array,
        required: true
    },
    discount: {
        type: Float32Array
    },
    quantity: {
        type: Number
    },
    quantity_sold: {
        type: Number,
    },
    unit: {
        type: String,
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    description: {
        type: Text
    },
    features: {
        type: Text,
    },
    store: {
        type: String,
        required: true
    },
    photo_gallery: {
        type: Map,
        of: String
    }
})

module.exports = mongoose.models.product || mongoose.model("product", productSchema)