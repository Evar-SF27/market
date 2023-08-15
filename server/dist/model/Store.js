"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const storeSchema = new mongoose_1.default.Schema({
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
});
var Store = mongoose_1.default.models.store || mongoose_1.default.model("store", storeSchema);
exports.default = Store;
