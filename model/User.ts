import mongoose from 'mongoose'

var userSchema = new mongoose.Schema({
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
})

var User =  mongoose.models.User || mongoose.model("User", userSchema)
export default User