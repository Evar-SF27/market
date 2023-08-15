"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
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
});
module.exports = mongoose_1.default.models.product || mongoose_1.default.model("product", productSchema);
