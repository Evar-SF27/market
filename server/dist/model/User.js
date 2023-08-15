"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    location: {
        type: String
    },
    store: {
        type: Array
    },
    subscribed_stores: {
        type: Map,
        of: String
    },
    refreshToken: {
        type: String
    }
});
var User = mongoose_1.default.models.User || mongoose_1.default.model("User", userSchema);
exports.default = User;
