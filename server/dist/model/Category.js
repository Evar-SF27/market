"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
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
});
var Category = mongoose_1.default.models.category || mongoose_1.default.model("Category", categorySchema);
exports.default = Category;
